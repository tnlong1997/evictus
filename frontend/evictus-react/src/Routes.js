import React from "react";

import Home from "./containers/Home/Home";
import ProjectEulerProblem from "./containers/ProjectEulerProblem/ProjectEulerProblem";
import ProjectEulerSearch from "./containers/ProjectEulerSearch/ProjectEulerSearch";
import NotFound from "./containers/NotFound/NotFound";

import AppliedRoute from "./components/AppliedRoute/AppliedRoute";

import {Switch} from "react-router-dom";

export default ({routesProps}) => (
	<Switch>
		<AppliedRoute exact path="/" component={Home}/>
		<AppliedRoute
			exact path="/projecteuler/:id/problem"
			component={ProjectEulerProblem}
		/>
		<AppliedRoute
			path="/projecteuler/search"
			component={ProjectEulerSearch}
			props={routesProps}
		/>
		<AppliedRoute component={NotFound} />
	</Switch>
)
