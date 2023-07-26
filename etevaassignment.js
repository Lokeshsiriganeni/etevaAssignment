const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const finalList1NotInList2 = [];
const finalList2NotInList1 = [];
const finalList2IntersectionList1 = [];

for (let name of list1) {
    if (!list2.includes(name)) {
        finalList1NotInList2.push(name);
    }
}
for (let name of list2) {
    if (!list1.includes(name)) {
        finalList2NotInList1.push(name);
    }
}

for (let name of list1) {
    if (list2.includes(name)) {
        finalList2IntersectionList1.push(name);
    }
}

console.log(finalList1NotInList2);
console.log(finalList2NotInList1);
console.log(finalList2IntersectionList1);