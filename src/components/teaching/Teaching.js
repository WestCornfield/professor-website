import TeachingExperienceAndFutureCourses from "./teachingExperienceAndFutureCourses/TeachingExperienceAndFutureCourses";
import "./teaching.css";
import TamuHeadshot from "../../resources/images/tamu_headshot.jpg";

function Teaching() {
    return <div className="teaching">
        <header>
            <h2>Teaching</h2>
        </header>
        <section>
            <h3>Teaching Statement</h3>
            <div className="teaching-statement">
                <div>
                    My teaching philosophy is very much rooted in the participatory nature of planning, disaster
    management as well as applied and engaged research. My extensive experience with community
    development, disaster reduction, land use planning, emergency preparedness and community
    development have honed the importance of voices of the communities in assessing and addressing
    change, in partnership with the academy and other allied professionals. My research interests include
    exploring the role of communities in building resilience using agency and community assets and how
    local knowledge can be used to better represent and serve underserved communities and Black
    Geographies. My goal as an instructor is to support both a respectful “student-teacher” relationship as
    well as a “student-student” relationship. One of my main aims is for students to leave the courses I
    teach with a willingness to challenge the status quo if it is found to be socially inequitable and
    replicating environmental and social harm; and to have the knowledge and skills to do so in keeping
    with core principles of respect and professionalism. To achieve this, the core theoretical framework
    that guides my teaching style is on focused on decolonization, critical pedagogy, Black geographies,
    participatory action research and feminism. It would be remiss of me as a Jamaican born immigrant
    woman, to not also explore international development trends and social movements as part of the
    wider understanding of planning theories and methodologies. Using relevant tools such as Geographic
    Information Systems to understand geographical patterns and other active learning methodologies will
    form a core part of my teaching methods.
                </div>
                <div className="tamu-headshot">
                    <img className="tamu-headshot-img" src={TamuHeadshot} />
                </div>
            </div>
            <div>
                <h3>Teaching Approach and Methods</h3>
                <div>
                    I use a combination of high impact project and service-based learning activities supplemented with
conventional lecture methods. Conventional lecture methods help to convey academic theories and
concepts while the project and service-learning activities foster engaged and active participation.

Projects and service-based learning provide students with the real-world experiences and decision-
making processes at stake when trying to address persistent environmental issues. This approach helps

students to develop the importance of partnerships and stakeholders in addressing urban planning and
hazard related issues at the local and community scale, which is central to my teaching philosophy.
The various means through which they engage with these assessments are varied inclusive of
technical writing, presentations, group discussions and podcasts to stimulate active student
engagement. Conventional lecture styles supported by research and practitioner-oriented literature is

used to impart theories in a manner that is very student-focused based on pre-attendance surveys. The
aim is to engage with students in a manner cognizant of diversity but not despite it.
                </div>
            </div>
            <div>
                <h3>Teaching Experience & Future Courses</h3>
                <div>
                    <TeachingExperienceAndFutureCourses />
                </div>
            </div>
        </section>
    </div>
}

export default Teaching;