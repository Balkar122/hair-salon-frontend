import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const TeamCard = ({ member }) => {
  return (
    <div className="card-luxury p-6 text-center">
      <img src={member.photo} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
      <h3 className="text-2xl font-display">{member.name}</h3>
      <p className="text-gold">{member.designation}</p>
      <p className="text-sm mt-2">{member.experience}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{member.skills}</p>
      <div className="flex justify-center gap-4 text-gold">
        <FaInstagram />
        <FaFacebookF />
        <FaLinkedinIn />
      </div>
    </div>
  )
}

export default TeamCard