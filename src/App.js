import { createRef, useState } from "react";
import "./App.scss";

import Navbar from "./components/Navbar";

// Sections
import Accueil from "./components/Sections/Accueil";
import BTS from "./components/Sections/BTS";
import Contact from "./components/Sections/Contact";
import Parcours from "./components/Sections/Parcours";
import Projets from "./components/Sections/Projets";
import APropos from "./components/Sections/APropos";
import SectionWrapper from "./components/Sections/SectionWrapper";
import VeilleTechnologique from "./components/Sections/Veilles";

function App() {
	const [sections] = useState([
		{
			name: "accueil",
			component: <Accueil />,
			ref: createRef(),
		},
		{
			name: "aboutme",
			component: <APropos />,
			ref: createRef(),
		},
		{
			name: "btssio",
			component: <BTS />,
			ref: createRef(),
		},
		{
			name: "parcours",
			component: <Parcours />,
			ref: createRef(),
		},
		{
			name: "projets",
			component: <Projets />,
			ref: createRef(),
		},
		{
			name: "veilletechno",
			component: <VeilleTechnologique />,
			ref: createRef(),
		},
		{
			name: "contact",
			component: <Contact />,
			ref: createRef(),
		},
	]);
	const [activeSection, setActiveSection] = useState(sections[0]);

	return (
		<div className="App">
			<Navbar activeSection={activeSection} sections={sections} />
			<div className="page-content">
				{sections.map((section, key) => (
					<SectionWrapper
						key={key}
						section={section}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
