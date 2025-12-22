import LayoutAuth from '@/features/auth/components/layout-auth'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LayoutAuth>
            {children}
        </LayoutAuth>
    )
}

export default Layout