class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

 // hash function using division method
 hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
    }
    return total % this.size
}
    // set a key-value pair into the hash table
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])

            }
        }
    }

    // retrieve the value associated with a key
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]

            }

        }
        return undefined;
    }

    // remove a key-value pair from the hash table
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexof(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);

            }
        }
    }
}
const table = new HashTable(50)
table.set("name", "yatheesh")
table.set("age", 23)
table.display()
console.log(table.get("name"));

table.set("mane", "clark")
table.set("name", "yathu")
table.remove()
table.display()