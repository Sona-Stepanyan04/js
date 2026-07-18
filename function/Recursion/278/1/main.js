function func(obj) {
  let values = Object.values(obj)
    for (let value of values) {
        if (typeof value === 'object' && value !== null) {
            func(value)
        } else {
            console.log(value)
        }
    }
}

func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})
