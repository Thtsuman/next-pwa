import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import SeoHead from "../components/SeoHead/SeoHead"
import { changeCounter } from "../redux/actions/appAction"
import style from "../styles/index.module.css"

interface IndexProps {
	counter: number
	changeCounter: (bool: boolean) => void
}

const index: React.FC<IndexProps> = ({ counter, changeCounter }) => {
	return (
		<>
			<SeoHead />
			<div className={`d-flex flex-column justify-content-center align-items-center ${style.custom_container}`}>
				<h1 className="font-weight-bold">Hello world</h1>
				<div className="d-flex align-items-center">
					<Button onClick={() => changeCounter(true)} variant="outline-primary mx-3">
						+
					</Button>
					<span className="h4 mb-0">{counter}</span>
					<Button onClick={() => changeCounter(false)} variant="outline-primary mx-3">
						-
					</Button>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = ({ app }: any) => ({
	counter: app.counter,
})

export default connect(mapStateToProps, { changeCounter })(index)
