import React, { useEffect, useState } from 'react';

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/contacts')
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch((error) => console.error('Error fetching contacts:', error));
    }, []);

    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.first_name} {contact.last_name} - {contact.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Contacts;
