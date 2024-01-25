import React from "react";

export const HomeComponent = () => <h2>Home</h2>;
export const AboutComponent = () => <h2>About</h2>;
export const ContactComponent = () => <h2>Contact</h2>;
    interface IRoute {
        name: string;
        path: string;
        component:(props?: any) => React.JSX.Element;
    }

export const routeConfig: IRoute[] = [
    {path: '/', name:"Home", component: HomeComponent},
    {path: '/about', name:"About",component: AboutComponent},
    {path: '/contact', name:"Contact", component: ContactComponent}
];
