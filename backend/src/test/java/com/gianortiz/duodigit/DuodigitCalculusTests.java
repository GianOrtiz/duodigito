package com.gianortiz.duodigit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class DuodigitCalculusTests {

    @Test
    public void testDuodigit() {
        long[] tests = {100, 123, 502, 450};
        long[] results = {100, 3444, 5522, 900};

        for (int i = 0; i < tests.length; i++) {
            assertEquals(new DuodigitCalculus(tests[i]).getResult(), results[i]);
        }
    }
}
