import "./teachingExperienceAndFutureCourses.css";

function TeachingExperienceAndFutureCourses() {
    const tableData = [
        {
            course: "Sustainable Communities",
            desc: "Focuses on sustainable community with applications in public policy/design including societal organization, disciplinary bound design and policy, and empowered approaches to design, social ecology, and public policy."
        },
        {
            course: "Planning Theory & Practice",
            desc: "A critical examination of the justifications for and major alternative approaches to planning in the public domain, beginning with the fundamental historical intentions of and projects in city planning within industrial societies and tracing the subsequent development of planning as political reform, political analysis, social mobilization, and other modern variants."
        },
        {
            course: "Field Methods for Planning Professionals",
            desc: "Ethnographic and qualitative research field methods techniques designed for supporting plan development and community led work. Focuses on community relation ethics and research."
        },
        {
            course: "Disaster & Emergency Management Methods",
            desc: "An interdisciplinary approach to disaster and emergency methods and issues related to engaging in the hazard and disaster research process, in addition to a variety of qualitative and quantitative methodological approaches that are currently being used in the discipline."
        },
        {
            course: "Black Geographies and Spatial Planning",
            desc: "Addresses the historical, political, and spatial contexts in which geographies of black populations emerge; using a Black Geographies lens to critically understand and deconstruct Eurocentric modes and applications of spatial planning."
        },
        {
            course: "Applied Planning",
            desc: "Acquisition, analysis, and management of information pertaining to urban and regional planning in a case specific scenario; issue analysis; formulation of goals and objectives, and policies; consensus building; includes all tasks leading up to the preparation of an urban, regional, or strategic plan."
        },
        {
            course: "Organizations of Communities for Disaster Response",
            desc: "Introduction to the study of organized and community planning and response to natural and technological disasters and social crisis; focus upon emergency preparedness and response; practical issues, planning for emergency management"
        }
    ];

    function tableContents() {
        const tableContents = tableData.map((row) => {
            return (<tr>
                <td>{row.course}</td>
                <td>{row.desc}</td>
            </tr>)
        });

        return tableContents;
    }


    return (<div>
        <table className="teaching-experience-and-future-courses">
            <tr>
                <th>Courses</th>
                <th>Description</th>
            </tr>
            {tableContents()}
        </table>
        <div>
            It is my hope to train future scholars to understand and recognize their positionality in being
advocates and orienting solutions to wicked planning problems firmly rooted in equity and social
justice. To do achieve this I aim to create a classroom space where everyone is safe and respected as
we navigate the learning and unlearning that is necessary to become more effective future urban
planners and disaster professionals. To support this ongoing commitment to diversity, I am a current
Bill Anderson Fund Fellow of the William Anderson Fund (BAF) for Mitigation Education and
Research and currently serve in the capacity of Fundraising Coordinator. My relationship with this
group reiterates by committed to mentoring and supporting minority scholars in hazard and disaster
research across the United States.
        </div>
    </div>);
}

export default TeachingExperienceAndFutureCourses;