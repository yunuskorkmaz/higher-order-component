import React , { PureComponent, useEffect, useState }from 'react';

const withLayout =(Component: React.FunctionComponent) => {

	const Wrapped = (props : any) => {
		const [data, setData] = useState(0);

		useEffect(() => {
			setTimeout(()=>{
				setData(1)
			},3000)
		},[])

		return (
			<>
					{
						data === 1 ? <Layout1><Component {...props} /></Layout1> : <Layout2><Component {...props} /></Layout2>
					}
			</>
		)
	}

	return Wrapped
}

const Layout1 = (props : any) => {

	return(<>
		<header>layout1</header>
		<main>
			{props.children}
		</main>
		<footer>layout 1</footer>
	
	</>)
}

const Layout2 = (props : any) => {

	return(<>
		<header>layout2</header>
		<main>
			{props.children}
		</main>
		<footer>layout 2</footer>
	
	</>)
}

export default withLayout;