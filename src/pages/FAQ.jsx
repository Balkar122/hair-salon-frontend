import FAQAccordion from '../components/FAQAccordion'
import { faqs } from '../services/dummyData'

const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-5xl font-display text-center mb-12">Frequently Asked Questions</h1>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  )
}

export default FAQ