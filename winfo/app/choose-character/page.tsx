
'use client';

import { ArrowRightIcon } from 'lucide-react';
import { useState } from 'react';



interface Character {
    id: number;
    name: string;
    image: string;
}

export default function ChooseCharacter() {
    const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

    const characters: Character[] = [
        { id: 1, name: 'Warrior', image: '⚔️' },
        { id: 2, name: 'Mage', image: '🧙' },
        { id: 3, name: 'Archer', image: '🏹' },
        { id: 4, name: 'Rogue', image: '🗡️' },
        { id: 5, name: 'Paladin', image: '🛡️' },
        { id: 6, name: 'Ranger', image: '🦅' },
    ];

    return (
        <div className="min-h-screen bg-white p-8 justify-center">
            <h1 className="text-3xl text-center text-black mb-12">
                Choose Your Character
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {characters.map((character) => (
                    <button
                        key={character.id}
                        onClick={() => setSelectedCharacter(character.id)}
                        className={`p-6 rounded-lg transition-all transform hover:scale-105 ${
                            selectedCharacter === character.id
                                ? 'bg-blue-600 border-2 border-blue-400 shadow-lg shadow-blue-500'
                                : 'bg-slate-700 border-2 border-slate-600 hover:border-slate-500'
                        }`}
                    >
                        <div className="text-5xl mb-3">{character.image}</div>
                        <p className="text-white font-semibold text-center">{character.name}</p>
                    </button>
                ))}
            </div>

            {selectedCharacter && (
                <div className="text-center mt-12">

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg">
                        <ArrowRightIcon/>
                    </button>
                </div>
            )}
        </div>
    );
}