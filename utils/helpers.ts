"use client";

import dayjs, { Dayjs } from "dayjs";
import { LoremIpsum } from "lorem-ipsum";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

/**
 * Formats a Date object into the "14th April at 07:08:49PM" format.
 * @param {Date} date - The Date object to be formatted.
 * @returns {string} The formatted date string.
 */
const formatDate = (
  date: Dayjs,
  format: string,
  forHeader: boolean
): string => {
  if (typeof window === "undefined") return "";
  const today = dayjs();

  if (forHeader) {
    if (today.isSame(date)) {
      return "Today";
    }
  }

  return date.format(format);
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function generateRandomSentence() {
  return lorem.generateSentences(2);
}

export { formatDate, generateRandomSentence };
