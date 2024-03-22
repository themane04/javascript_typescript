import React from "react";
import Mail from "../8_mailbox/mail";
import SomeList from "../1_OrganisedList/Liste";
import ColorChanger from "../2_ChangingColor/ChangingColors";
import {FirstComponent} from "../3_ThreeComponents/ThreeComponents";
import Time from "../4_time/time";
import {AnimalList} from "../5_animal_list/animal_list";
import Form from "../7_form/form";

export const HomeComponent = () => <h2>Home</h2>;
export const AboutComponent = () => <h2>About</h2>;
export const ContactComponent = () => <h2>Contact</h2>;
    interface IRoute {
        name: string;
        path: string;
        component:(props?: any) => React.JSX.Element;
    }

export const routeConfig: IRoute[] = [
    {path: '/organisedlist', name:"Organised List", component: SomeList},
    {path: '/changingcolor', name:"Color Changer",component: ColorChanger},
    {path: '/threecomponents', name:"Three Components", component: FirstComponent},
    {path: '/clock', name:"What time is it?", component: Time},
    {path: '/animallist', name:"Animal List", component: AnimalList},
    {path: '/mail', name:"Mail", component: Mail},
    {path: '/form', name:"Form", component: Form}
];
