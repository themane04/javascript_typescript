import React from "react";
import {useState, useRef} from "react";

interface IAnimal {
    name: string
    call: string
}

export function AnimalList() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    const [formData, setFormData] = useState({name: "", call: ""})

    const nameInputRef = useRef<any>(null);
    const callInputRef = useRef<any>(null);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleAddAnimal = () => {
        setAnimals((prevAnimals: any) => [
            ...prevAnimals,
            {name: formData.name, call: formData.call}
        ]);

        setFormData({name: "", call: ""});

        nameInputRef.current.focus();
        callInputRef.current.focus();
    };

    return (
        <>
            <div style={{ paddingTop:"5%", textAlign: "center"}}>
                <h1>Animal List</h1>
                <p style={{fontSize:"30px", paddingTop:"20px"}}>Name</p>
                <input
                    ref={nameInputRef}
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <p style={{fontSize:"30px", paddingTop:"20px"}}>Call</p>
                <input ref={callInputRef}
                       name="call"
                       value={formData.call}
                       onChange={handleInputChange}
                />

                <div>
                    {animals.map((animal, index) => (
                        <div key={index}>{`${animal.name} says ${animal.call}`}</div>
                    ))}
                </div>

                <button onClick={handleAddAnimal}
                        style={{width: "5%", height: "5%", position: "absolute", top: "45%", marginLeft: "10%"}}>Add
                </button>
            </div>

        </>
    );
}

