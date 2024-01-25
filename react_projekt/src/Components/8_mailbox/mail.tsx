import React, {useState} from "react";
import Mailbox from "./mailbox";

export interface IMailboxProps {
    mails: IMail[],
    updateMails: (mails: IMail[]) => void;
}

export interface IMail {
    title: string;
    text: string;
}

const Emaillist: IMail[] = [{title: "Why wash your face", text: "It is healthy and you should do it"},
    {title: "Delivery problems", text: "Your product will arrive a day later due to import problems"},
    {title: "Black Friday Sale", text: "Now, for only 24 hours, 30% sale on the whole sortiment"},
    {
        title: "Dude really",
        text: "Next time you leave your dog outside, make sure it doesnt relieve itself in our garden"
    },
    {title: "Stop procrastinating", text: "With our new app, you can set your own custom reminders"},
    {
        title: "Learn typescript",
        text: "With our new typescript course, you will learn how to make your JS-Skills typesafe"
    }]

function Mail() {

    const [mails, setMails] = useState<IMail[]>([]);

    function changeMails(newMails: IMail[]) {
        setMails(newMails);
    }

    const addRandomMail = () => {
        const randomEmail = Emaillist[Math.floor(Math.random() * Emaillist.length)];
        changeMails([...mails, randomEmail]);
    }

    const renderEmailCoutMessage = () => {
        switch (mails.length) {
            case 0:
                return "You have no mails";
            case 1:
                return "You have 1 new mail";
            default:
                return `You have ${mails.length} new mails`;
        }
    }

    return (
        <>
            <p style={{fontSize:"30px", marginTop:"50px"}}>{renderEmailCoutMessage()}</p>
            <Mailbox mails={mails} updateMails={changeMails}/>
            <button style={{width:"12%"}} onClick={addRandomMail}>New Mail</button>
        </>
    );
}

export default Mail;