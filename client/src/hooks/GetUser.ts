import { useState } from 'react';

export const GetUser = (email, db) => {
    const foundUser = db.find(user => user.email === email);
    const user = foundUser || 'error';
    return user;
}

