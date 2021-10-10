package com.gianortiz.duodigit;

import java.util.Map;
import java.util.HashMap;

public class DuodigitCalculus {
    private final long input;
    private final long result;
    private final long elapsedTimeMillis;

    /**
     * @param number Number to calculate smaller multiple that is a duodigit.
     */
    public DuodigitCalculus(long number) {
        this.input = number;

        long startTime = System.currentTimeMillis();
        this.result = smallerDuodigitMultiple(number);
        long endTime = System.currentTimeMillis();

        this.elapsedTimeMillis = endTime - startTime;
    }

    /**
     * Calculate the smaller multiple of the number that is a duodigit.
     * @param number The number to use for multiples.
     * @return The smaller multiple of number that is a duodigit.
     */
    private long smallerDuodigitMultiple(long number) {
        long multiplier = 1;
        long multiple = multiplier * number;
        while(!isDuodigit(multiple)) {
            multiplier++;
            multiple = multiplier * number;
        }
        return multiple;
    }

    /**
     * Verifies if the given number is a duodigit.
     * @param number The number to verify.
     * @return The result from the verification.
     */
    private boolean isDuodigit(long number) {
        String numberStr = Long.toString(number);
        Map<Character, Integer> characters = new HashMap<Character, Integer>();
        for (int i = 0; i < numberStr.length(); i++) {
            char c = numberStr.charAt(i);
            if (!characters.containsKey(c)) {
                characters.put(c, 0);
            }
        }
        return characters.size() <= 2 && characters.size() > 0;
    }

    public long getInput() {
        return this.input;
    }

    public long getResult() {
        return this.result;
    }

    public long getElapsedTimeMillis() {
        return this.elapsedTimeMillis;
    }
}
