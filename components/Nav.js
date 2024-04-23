import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css'

const Nav = ({ children }) => {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link className={router.pathname == "/" ? navStyles.active : null} href="/">{user ? 'Student Manager' : 'SPMS'}</Link>
                </li>
                {/* {user ? <li> <Link className={router.pathname == "/studentManager" ? navStyles.active : null} href="/studentManager">Student Manager</Link></li> : null} */}
                {user ? <li> <Link className={router.pathname == "/co" ? navStyles.active : null} href="/co">CO</Link></li> : null}
                {user ? <li> <Link className={router.pathname == "/po" ? navStyles.active : null} href="/po">PO</Link></li> : null}
            </ul>
            <ul className={navStyles.rightAlign}>
                {user ? <li> <Link className={router.pathname == `/user/[...user]` ? navStyles.active : null} href={`/user/${user.nickname}`}>{user.nickname}</Link></li> : null}
                {user ? <li > <Link href="/api/auth/logout"><span className={navStyles.colorRed}>logout</span></Link></li> : <li > <Link href="/api/auth/login"><span className={navStyles.colorGreen}>login</span></Link></li>}
            </ul>
        </nav>
    )
}
export default Nav