import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const ResumeTemplate = () => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <Text style={styles.title}>John Doe</Text>
            <Text style={styles.subtitle}>Software Developer</Text>
            <View style={styles.contact}>
              <Text style={styles.contactItem}>1234 Elm Street</Text>
              <Text style={styles.contactItem}>City, State, Zip</Text>
              <Text style={styles.contactItem}>Phone: (123) 456-7890</Text>
              <Text style={styles.contactItem}>
                Email: john.doe@example.com
              </Text>
            </View>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.text}>
              Experienced software developer with a passion for creating
              efficient, scalable, and maintainable web applications.
            </Text>
            <Text style={styles.sectionTitle}>Experience</Text>
            <Text style={styles.subtitle}>Software Developer - XYZ Inc.</Text>
            <Text style={styles.date}>June 2018 - Present</Text>
            <Text style={styles.text}>
              - Developed and maintained web applications using React.js.
            </Text>
            <Text style={styles.text}>
              - Collaborated with cross-functional teams to deliver high-quality
              software products.
            </Text>
            <Text style={styles.text}>
              - Implemented responsive design principles to ensure optimal user
              experience across devices.
            </Text>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.subtitle}>
              Bachelor of Science in Computer Science
            </Text>
            <Text style={styles.date}>XYZ University - Graduated May 2018</Text>
          </View>
        </Page>
      </Document>
    </>
  )
}

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 50,
  },
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  contact: {
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 12,
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 5,
  },
})

export default ResumeTemplate
