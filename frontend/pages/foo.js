import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'


const Foo = ({ token }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/api/foo`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <Layout>
            <Head>
                <title>Foo</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <h1>User Foo</h1>
                <div>
                    <b>Token:</b> {token.substring(0, 15)}... <br /><br />
                    This route is protected by token, user is required to login first.
                    <br />
                    Otherwise, it will be redirect to Login page
                    <br /><br />
                    {JSON.stringify(user)}
                </div>
            </div>
        </Layout>
    )



}

export default withAuth(Foo)


export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}