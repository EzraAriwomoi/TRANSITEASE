import React, { useContext } from 'react';
import './AccessibilityComponent.css';
import { FontSizeProvider, FontSizeContext } from './FontSizeContext';
import { ThemeProvider, ThemeContext } from './ThemeContext';

const FontSizeControls = () => {
    const { changeFontSize } = useContext(FontSizeContext);

    return (
        <div className="font-size-controls">
            <button onClick={() => changeFontSize('14px')}>A-</button>
            <button onClick={() => changeFontSize('18px')}>A+</button>
        </div>
    );
};

const ThemeControls = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return <button onClick={toggleTheme}>Toggle High Contrast</button>;
};

const Assistance = () => (
    <div className="assistance">
        <h2>Need Assistance?</h2>
        <p>Call our support team at <a href="tel:+123456789">+123456789</a> or <a href="mailto:support@transitease.com">email us</a>.</p>
    </div>
);

const AccessibilityInfo = () => (
    <section id="accessibility-info">
        <h2>Accessibility Information</h2>
        <p>Our services are designed to be accessible to everyone. Here are some of the features we offer:</p>
        <ul>
            <li>Wheelchair-accessible vehicles</li>
            <li>Priority seating for passengers with disabilities</li>
            <li>Assistance for visually and hearing-impaired passengers</li>
        </ul>
    </section>
);

const AccessibilityComponent = () => {
    return (
        <FontSizeProvider>
            <ThemeProvider>
                <div className="accessibility-container">
                    <h2>Accessibility Features</h2>
                    <p>TransitEase is designed to be accessible to a broad user base, including individuals with disabilities. The platform offers features such as:</p>
                    <ul>
                        <li>Customizable font sizes</li>
                        <li>High-contrast color schemes</li>
                        <li>Screen reader compatibility</li>
                        <li>Alternative input methods</li>
                        <li>Specialized assistance services</li>
                        <li>Accessibility information for passengers with specific needs</li>
                    </ul>
                    <p>Our goal is to ensure equal access to transportation services for all users, accommodating those with visual, auditory, or mobility impairments.</p>
                    <FontSizeControls />
                    <ThemeControls />
                    <div id="content">This is sample text.</div>
                    <Assistance />
                    <AccessibilityInfo />
                </div>
            </ThemeProvider>
        </FontSizeProvider>
    );
};

export default AccessibilityComponent;
