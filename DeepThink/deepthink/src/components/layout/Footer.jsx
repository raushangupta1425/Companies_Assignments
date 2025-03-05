export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ textAlign: "center", padding: "10px 0", background: "#000", color: "#fff" }}>
            <p>© {currentYear} DeepThinker. All rights reserved.</p>
        </footer>
    );
};
