module.exports = function toReadable(number) {
    const units = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
        },
        firstTen = {
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        },
        tens = {
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
        };
    if (number == 0) {
        return "zero";
    }
    if (String(number).length == 1) {
        for (let key in units) {
            return units[number];
        }
    } else if (String(number).length == 2) {
        if (number < 20) {
            return firstTen[number];
        } else if (number >= 20 && String(number).slice(1, 2) == 0) {
            return tens[number];
        } else
            return (
                tens[String(number).slice(0, 1) + "0"] +
                " " +
                units[String(number).slice(1, 2)]
            );
    } else if (String(number).length == 3) {
        if (
            String(number).slice(2, 3) == 0 &&
            String(number).slice(1, 2) == 0
        ) {
            return units[String(number).slice(0, 1)] + " hundred";
        } else if (
            String(number).slice(2, 3) == 0 &&
            String(number).slice(1, 3) > 10
        ) {
            return (
                units[String(number).slice(0, 1)] +
                " hundred " +
                tens[String(number).slice(1, 3)]
            );
        } else if (
            String(number).slice(2, 3) == 0 &&
            String(number).slice(1, 3) == 10
        ) {
            return units[String(number).slice(0, 1)] + " hundred " + "ten";
        } else if (String(number).slice(1, 3) < 10) {
            return (
                units[String(number).slice(0, 1)] +
                " hundred " +
                units[String(number).slice(2, 3)]
            );
        } else if (
            String(number).slice(1, 3) >= 10 &&
            String(number).slice(1, 3) < 20
        ) {
            return (
                units[String(number).slice(0, 1)] +
                " hundred " +
                firstTen[String(number).slice(1, 3)]
            );
        } else {
            return (
                units[String(number).slice(0, 1)] +
                " hundred " +
                tens[String(number).slice(1, 2) + "0"] +
                " " +
                units[String(number).slice(2, 3)]
            );
        }
    }
};
