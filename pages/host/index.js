import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

const Host = props => {
	return (
		<Layout
			content={
				<div>
					<Head>
						<title>Your houses</title>
					</Head>
					<h2>Your houses</h2>

					<div className='houses'>
						{props.houses.map((house, index) => {
							return (
								<div className='house' key={index}>
									<img src={house.picture} alt='House picture' />
									<div>
										<h2>
											{house.title} in {house.town}
										</h2>
										<p>
											<Link href={`/houses/${house.id}`}>
												<a>View house page</a>
											</Link>
										</p>
										<p>
											<Link href={`/host/${house.id}`}>
												<a>Edit house details</a>
											</Link>
										</p>
									</div>
								</div>
							)
						})}
					</div>

					<style jsx>{`
            .houses {
              display: grid;
              grid-template-columns: 100%;
              grid-gap: 40px;
            }

            .house {
              display: grid;
              grid-template-columns: 30% 70%;
              grid-gap: 40px;
            }

            .house img {
              width: 180px;
            }
          `}</style>
				</div>
			}
		/>
	)
}

Host.getInitialProps = async ctx => {
	const response = await axios({
		method: 'get',
		url: 'http://localhost:3000/api/host/list',
		headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
	})

	return {
		houses: response.data.houses
	}
}

export default Host