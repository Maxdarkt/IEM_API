exports.transformNumbers = (req, res) => {
    function convertInNumber(entryReplaced, sum) {
        for (let i = 0; i < entryReplaced.length; i++) {
            switch (entryReplaced[i]) {
                case "M":
                    sum += 1000
                    break
                case "D":
                    sum += 500
                    break
                case "C":
                    sum += 100
                    break
                case "L":
                    sum += 50
                    break
                case "X":
                    sum += 10
                    break
                case "V":
                    sum += 5
                    break
                case "I":
                    sum += 1
                    break
                default:
            }
        }
        return sum
    }

    function replaceException(romanNumber) {
        let sum = 0
        let regexCM = /CM/
        let regexCD = /CD/
        let regexXC = /XC/
        let regexXL = /XL/
        let regexIX = /IX/
        let regexIV = /IV/

        if (romanNumber.match(regexCM)) {
            romanNumber = romanNumber.replace("CM", "0")
            sum += 900
        }
        if (romanNumber.match(regexCD)) {
            romanNumber = romanNumber.replace("CD", "0")
            sum += 400
        }
        if (romanNumber.match(regexXC)) {
            romanNumber = romanNumber.replace("XC", "0")
            sum += 90
        }
        if (romanNumber.match(regexXL)) {
            romanNumber = romanNumber.replace("XL", "0")
            sum += 40
        }
        if (romanNumber.match(regexIX)) {
            romanNumber = romanNumber.replace("IX", "0")
            sum += 9
        }
        if (romanNumber.match(regexIV)) {
            romanNumber = romanNumber.replace("IV", "0")
            sum += 4
        }
        return convertInNumber(romanNumber, sum)
    }

    async function main() {
        const result = await replaceException(req.body.data)
        return res.status(200).json({ data: result })
    }
    main()
}
