import TeamCard from '../components/TeamCard'
import { teamMembers } from '../services/dummyData'

const Team = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-5xl font-display text-center mb-12">Meet Our Team</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team