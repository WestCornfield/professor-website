import "./research.css";
import earthquakeVisual from "../../../resources/images/earthquake_outlook_sf_bay_region_2014_2043.png";
import tradQuantVisual from "../../../resources/images/traditional_quantitative_program_evaluation_approach.png";

function Research() {
    const research = [{
        title: "Transforming EDI: An Emergent and Equitable Evaluation Journey",
        subtitle: "Validity in research is not always synonymous with objectivity.",
        summary: <>
            <div>This blog investigates several key questions:</div>
            <ul>
                <li>How can a deeper understanding of participant experiences in Equity, Diversity, and Inclusion (EDI) programs influence CCL’s approach to preparing new facilitators?</li>
                <li>What can CCL learn from this process to inform the current leadership and EDI-specific leadership program evaluation design?</li>
                <li>How can my experiences as a GEDI Scholar contribute to answering these questions?</li>
            </ul>
        </>,
        visual: tradQuantVisual,
        href: "https://cclinnovation.org/news-posts/transforming_edi_an_emergent_and_equitable_evaluation_journey/"
    }, {
        title: "A Grassroots Approach to Food Insecurity - Lessons for Earthquake Resilience",
        subtitle: "The Food Justice and Equity Challenges theme captures the complexity and interrelationship between food security, diverse populations, and systemic and structural racism.",
        summary: <div>
            The overarching goal of the Diversifying HayWired Communication project is to assist the US 
Geological Survey (USGS) in identifying and engaging key stakeholders representing diverse 
communities within the San Francisco Bay Area regarding the findings of the HayWired 
scenario, which highlights the impacts of a hypothetical magnitude 7.0 earthquake on the 
Hayward Fault and its aftershocks.
        </div>,
        visual: earthquakeVisual,
        href: "https://hazards.colorado.edu/uploads/documents/lennoxmorrison-food-security-final-reformatted.pdf"
    }]

    return (<section className="public-reports">
        <h2 className="public-reports-title">Public Reports</h2>
        {research.map((report) => {
            return <div className="article">
                <h3>{report.title}</h3>
                <h4>{report.subtitle}</h4>
                <div className="article-contents">
                    <div>{ report.summary }</div>
                    <div>
                        <img className="article-visual" src={report.visual} />
                    </div>
                </div> 
                <div className="article-link"><a href={report.href}>Click Here to Read More</a></div>               
            </div>
        })}
    </section>)
}

export default Research;