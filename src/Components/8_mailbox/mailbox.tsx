import React from 'react';
import { IMailboxProps } from './mail';

const Mailbox: React.FC<IMailboxProps> = ({ mails, updateMails }) => {
    const deleteMail = (index: number) => {
        const newMails = [...mails];
        newMails.splice(index, 1);
        updateMails(newMails);
    };

    return (
        <div>
            {mails.map((mail, index) => (
                <div key={index}>
                    <h3>{mail.title}</h3>
                    <p>{mail.text}</p>
                    <button style={{width:"12%", marginBottom:"20px"}} onClick={() => deleteMail(index)}>Delete this mail</button>
                </div>
            ))}
        </div>
    );
};

export default Mailbox;
