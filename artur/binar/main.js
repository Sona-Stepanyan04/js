let aBinar = "";
let bBinaar = "";
let aChange = "";
let bChange = "";
let aReverse = "";
let bReverse = "";
let carry = 0;
const n = 8;
let result = "";
let x = "1";
let add = "";

function binar(a, b) {

    //դրական ենք սաքում
    if (a < 0) {
        aChange = -a;
    } else {
        aChange = a;
    }

    if (b < 0) {
        bChange = -b;
    } else {
        bChange = b;
    }


    //երկուական համակարքով ենք գրում
    while (aChange > 0) {
        let mod = aChange % 2;
        aBinar = mod + aBinar;
        aChange = Math.floor(aChange / 2);
    }

    while (bChange > 0) {
        let mod = bChange % 2;
        bBinaar = mod + bBinaar;
        bChange = Math.floor(bChange / 2);
    }


    //տեքստ ենք սարքում
    let aNum = aBinar.toString();
    let bNum = bBinaar.toString();

    //երկարությունը
    let bStr = bNum.length;
    let aStr = aNum.length;


    //0-ներ ենք ավելացնւմ բացի նշանի առաջին բիթից
    for (let i = 0; i < n - aStr - 1; i++) {
        aNum = "0" + aNum;
    }

    for (let i = 0; i < n - bStr - 1; i++) {
        bNum = "0" + bNum;
    }

    for (let i = 0; i < n - 1; i++) {
        x = "0" + x;
    }


    //հակառակ կոդը
    if (a < 0) {
        for (let i = 0; i < aNum.length; i++) {
            if (aNum[i] == "1") {
                aReverse += "0";
            } else if (aNum[i] == "0") {
                aReverse += "1";
            }
        }
    }

    if (b < 0) {
        for (let i = 0; i < bNum.length; i++) {
            if (bNum[i] == "1") {
                bReverse += "0";
            } else if (bNum[i] == "0") {
                bReverse += "1";
            }
        }
    }


    //նշանի բիթի սիմվոլի որոշումը
    if (a < 0) {
        aNum = "1" + aReverse;
    } else {
        aNum = "0" + aNum;
    }

    if (b < 0) {
        bNum = "1" + bReverse;
    } else {
        bNum = "0" + bNum;
    }



    //դրական թվերի գումարում
    for (let i = aNum.length; i > 0; i--) {
        let sum = Number(aNum[i]) + Number(bNum[i]) + carry;

        if (sum === 0) {
            result = "0" + result;
            carry = 0;
        } else if (sum === 1) {
            result = "1" + result;
            carry = 0;
        } else if (sum === 2) {
            result = "0" + result;
            carry = 1;
        } else if (sum === 3) {
            result = "1" + result;
            carry = 1;
        }

        if (carry === 1) result = "1" + result;
    }


    //բացասական թվերի գումարումը
    if (a < 0) {
        for (let i = aNum.length; i > 0; i--) {
            let additional = Number(aNum[i]) + Number(x[i]) + carry;

            if (additional === 0) {
                add = "0" + add;
                carry = 0;
            } else if (additional === 1) {
                add = "1" + add;
                carry = 0;
            } else if (additional === 2) {
                add = "0" + add;
                carry = 1;
            } else if (additional === 3) {
                add = "1" + add;
                carry = 1;
            }

            if (carry === 1) add = "1" + add;
        }
        console.log("This is a addition code", add);
    }


    //լրացման կոդը
    if (b < 0) {
        for (let i = bNum.length; i > 0; i--) {
            let additional = Number(bNum[i]) + Number(x[i]) + carry;

            if (additional === 0) {
                add = "0" + add;
                carry = 0;
            } else if (additional === 1) {
                add = "1" + add;
                carry = 0;
            } else if (additional === 2) {
                add = "0" + add;
                carry = 1;
            } else if (additional === 3) {
                add = "1" + add;
                carry = 1;
            }

            if (carry === 1) add = "1" + add;
        }
        console.log("This is a addition code", add);
    }


    //print
    console.log("This is a first number binary:", aBinar);
    console.log("This is a second number binary:", bBinaar);

    console.log("This is a first direct code:", aNum);
    console.log("This is a second direct code:", bNum);

    console.log("This is a sum:", result);

    // return [aBinar, bBinaar, aNum, bNum, result, x, add];
}




console.log(binar(-5, 3));