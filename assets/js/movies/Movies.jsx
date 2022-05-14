import { unmountComponentAtNode } from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';

function Movies() {
    return
    <div className='movies'>
        <Header />
        Bonjour tout le monde
    </div>
}

const TAG = 'post-movies';

class MoviesElement extends HTMLElement {

    connectedCallback() {
        root.render(<Movies />);
    }

    disconnectedCallback() {
        unmountComponentAtNode(this)
    }
}
const container = document.querySelector(TAG);
const root = createRoot(container);

customElements.define(TAG, MoviesElement);