<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>
<html>
<head>
<script src="<c:url value="/resources/scripts/jquery-3.3.1.min.js" />"></script>
</head>
<body>
	<h1>Title : ${title}</h1>
	<h1>Message : ${message}</h1>

	<sec:authorize access="hasRole('ROLE_USER')">
		<c:url value="/j_spring_security_logout" var="logoutUrl" />

		<!-- csrt for log out-->
		<form action="${logoutUrl}" method="post" id="logoutForm">
			<%-- 		<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" /> --%>
		</form>

		<script>
			function formSubmit() {
				document.getElementById("logoutForm").submit();
			}
		</script>

		<c:if test="${pageContext.request.userPrincipal.name != null}">
			<h2>
				Welcome : ${pageContext.request.userPrincipal.name} | <a
					href="javascript:formSubmit()"> Logout</a>
			</h2>
		</c:if>
	</sec:authorize>
	<%@ include  file="/angular5/dist/index.html"  %>
<%-- 	<jsp:include page="/angular5/dist/index.html" /> --%>

</body>
</html>