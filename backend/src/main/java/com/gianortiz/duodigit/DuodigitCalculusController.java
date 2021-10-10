package com.gianortiz.duodigit;

import javax.validation.constraints.Min;

import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


@RestController
@Validated
public class DuodigitCalculusController {
    
    @GetMapping(value="/duodigit", produces=MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin(origins = "*")
    public DuodigitCalculus duodigitCalculus(
        @RequestParam("number") @Min(100) long number) {
        return new DuodigitCalculus(number);
    }
}
