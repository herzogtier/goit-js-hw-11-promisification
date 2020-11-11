// Перепиши функцию toggleUserState() так, 
// чтобы она не использовала callback - функцию callback,
// а принимала всего два параметра allUsers и userName 
// и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//     );
    
    const promise = new Promise((resolve, reject) => { 
        resolve(allUsers.map(
            user =>user.name === userName ? { ...user, active: !user.active } : user,
            ))
    })
    return promise;

//   callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// console.table(users);
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Poly', logger);
// toggleUserState(users, 'Ajax', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */

console.table(users);
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Poly').then(logger);
toggleUserState(users, 'Ajax').then(logger);
toggleUserState(users, 'Lux').then(logger);