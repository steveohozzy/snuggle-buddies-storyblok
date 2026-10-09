"use client";

import { useCallback, useEffect, useState } from "react";

const FAVOURITES_KEY = "snuggle-buddies-favourites";
const FAVOURITES_EVENT = "snuggle-buddies-favourites-change";

export function useBuddyFavourites(buddies = []) {
  const [saved, setSaved] = useState([]);

  const validIds = buddies.map((buddy) => buddy.id);

  const filterSaved = useCallback(
    (ids) => ids.filter((id) => validIds.includes(id)),
    [buddies]
  );

  useEffect(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem(FAVOURITES_KEY) || "[]"
      );

      setSaved(
        Array.isArray(stored)
          ? filterSaved(stored.filter((id) => typeof id === "string"))
          : []
      );
    } catch {
      setSaved([]);
    }

    function handleFavouritesChange(event) {
      if (Array.isArray(event.detail)) {
        setSaved(filterSaved(event.detail));
      }
    }

    function handleStorageChange(event) {
      if (event.key === FAVOURITES_KEY) {
        try {
          const stored = JSON.parse(event.newValue || "[]");
          setSaved(
            Array.isArray(stored) ? filterSaved(stored) : []
          );
        } catch {
          setSaved([]);
        }
      }
    }

    window.addEventListener(FAVOURITES_EVENT, handleFavouritesChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener(
        FAVOURITES_EVENT,
        handleFavouritesChange
      );
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [filterSaved]);

  const toggleFavourite = useCallback((id) => {
    setSaved((previous) => {
      const next = previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id];

      try {
        localStorage.setItem(FAVOURITES_KEY, JSON.stringify(next));
      } catch {
        // Storage may be unavailable.
      }

      window.dispatchEvent(
        new CustomEvent(FAVOURITES_EVENT, { detail: next })
      );

      return next;
    });
  }, []);

  return { saved, toggleFavourite };
}