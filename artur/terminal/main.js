function balanc(x) {
    return function sum(y, text) {

        if (x === 0) {
            console.log("Ձեր բալանսը զրո է։");
        } else {
            if (text === "plus") {
                x += y;
                console.log("Ավելացվեց", y, "դրամ։");
            } else if (text === "minus") {
                if (x < y) {
                    console.log("Բավարար գումար չկա։");
                } else {
                    x -= y;
                    console.log("Հանվեց", y, "դրամ։");
                }
            } else {
                console.log("Անհայտ գործողություն։ Օգտագործեք 'plus' կամ 'minus'։");
            }
        }

        console.log("Ընթացիկ բալանսը՝", x, "դրամ։");
        return x;
    };
}


const myBalance = balanc(500);
myBalance(500, "plus");
myBalance(5000, "minus");
myBalance(5000, "dxfcgvhbj");