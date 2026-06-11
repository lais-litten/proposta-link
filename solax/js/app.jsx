/* ============================ APP ============================ */
const P_ = window.PROPOSTA;
const BESS_LOGO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMxIiBoZWlnaHQ9IjIwMyIgdmlld0JveD0iMCAwIDQzMSAyMDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNjcuNjQyIDEyOS4zMjJWODUuNzkwNUgxNzguNjJWMTI5LjMyMkgxNjcuNjQyWk0xNDkuNzkgMTEyLjkwMlYxMDIuMTE1SDE5Ni4zNzdWMTEyLjkwMkgxNDkuNzlaTTIwNS4wNzQgMTM1LjE0NlY2OC4zMjA1SDIzMi40NzJDMjM3LjExOCA2OC4zMjA1IDI0MS4wMzIgNjkuMDUyNCAyNDQuMjE0IDcwLjUxNjJDMjQ3LjM5NiA3MS45Nzk5IDI0OS43ODMgNzQuMDE2NSAyNTEuMzc0IDc2LjYyNTlDMjUzLjAyOSA3OS4xNzE2IDI1My44NTYgODIuMTMxIDI1My44NTYgODUuNTA0MUMyNTMuODU2IDg4Ljg3NzEgMjUzLjEyNCA5MS43MDkyIDI1MS42NiA5NC4wMDA0QzI1MC4xOTYgOTYuMjkxNSAyNDguMjU1IDk4LjA3MzUgMjQ1LjgzNyA5OS4zNDY0QzI0My40ODIgMTAwLjU1NiAyNDAuOTA1IDEwMS4yNTYgMjM4LjEwNCAxMDEuNDQ3TDIzOS41MzYgMTAwLjM5NkMyNDIuNTkxIDEwMC41MjQgMjQ1LjI5NiAxMDEuMzUxIDI0Ny42NTEgMTAyLjg3OUMyNTAuMDY5IDEwNC4zNDIgMjUxLjk0NyAxMDYuMzE1IDI1My4yODMgMTA4Ljc5N0MyNTQuNjgzIDExMS4yNzkgMjU1LjM4MyAxMTMuOTg0IDI1NS4zODMgMTE2LjkxMkMyNTUuMzgzIDEyMC40NzYgMjU0LjUyNCAxMjMuNjI2IDI1Mi44MDYgMTI2LjM2M0MyNTEuMTUxIDEyOS4wOTkgMjQ4LjY2OSAxMzEuMjYzIDI0NS4zNiAxMzIuODU0QzI0Mi4xMTQgMTM0LjM4MiAyMzguMTM2IDEzNS4xNDYgMjMzLjQyNyAxMzUuMTQ2SDIwNS4wNzRaTTIxNy45NjEgMTI0LjY0NEgyMzEuMzI2QzIzNC44MjcgMTI0LjY0NCAyMzcuNTMyIDEyMy44NDkgMjM5LjQ0MSAxMjIuMjU4QzI0MS4zNSAxMjAuNjY3IDI0Mi4zMDUgMTE4LjM3NiAyNDIuMzA1IDExNS4zODRDMjQyLjMwNSAxMTIuMzkzIDI0MS4zMTggMTEwLjA3IDIzOS4zNDUgMTA4LjQxNUMyMzcuMzcyIDEwNi42OTcgMjM0LjYzNiAxMDUuODM4IDIzMS4xMzUgMTA1LjgzOEgyMTcuOTYxVjEyNC42NDRaTTIxNy45NjEgOTYuMTk2MUgyMzAuMzcyQzIzMy43NDUgOTYuMTk2MSAyMzYuMzIyIDk1LjQzMjQgMjM4LjEwNCA5My45MDQ5QzIzOS44ODYgOTIuMzc3NSAyNDAuNzc3IDkwLjIxMzYgMjQwLjc3NyA4Ny40MTMzQzI0MC43NzcgODQuNjc2NyAyMzkuODg2IDgyLjU0NDcgMjM4LjEwNCA4MS4wMTcyQzIzNi4zMjIgNzkuNDI2MiAyMzMuNzEzIDc4LjYzMDYgMjMwLjI3NiA3OC42MzA2SDIxNy45NjFWOTYuMTk2MVpNMjYyLjUwMSAxMzUuMTQ2VjY4LjMyMDVIMzA2LjUxVjc4LjcyNjFIMjc1LjM4OVY5Ni4xOTYxSDMwMy42NDdWMTA2LjIySDI3NS4zODlWMTI0Ljc0SDMwNi41MVYxMzUuMTQ2SDI2Mi41MDFaTTMzNy4wNzIgMTM2LjI5MUMzMzIuMjM1IDEzNi4yOTEgMzI3LjkwNyAxMzUuNDY0IDMyNC4wODkgMTMzLjgwOUMzMjAuMzM0IDEzMi4xNTQgMzE3LjM3NCAxMjkuNzM2IDMxNS4yMSAxMjYuNTU0QzMxMy4wNDcgMTIzLjM3MiAzMTEuOTAxIDExOS41MjEgMzExLjc3NCAxMTUuMDAzSDMyNS40MjVDMzI1LjQ4OSAxMTYuOTc1IDMyNS45NjYgMTE4Ljc1NyAzMjYuODU3IDEyMC4zNDlDMzI3LjgxMiAxMjEuOTQgMzI5LjE0OCAxMjMuMjEyIDMzMC44NjcgMTI0LjE2N0MzMzIuNTg1IDEyNS4wNTggMzM0LjY1MyAxMjUuNTA0IDMzNy4wNzIgMTI1LjUwNEMzMzkuMDQ1IDEyNS41MDQgMzQwLjc5NSAxMjUuMjE3IDM0Mi4zMjIgMTI0LjY0NEMzNDMuODUgMTI0LjAwOCAzNDUuMDI3IDEyMy4xMTcgMzQ1Ljg1NCAxMjEuOTcxQzM0Ni43NDUgMTIwLjc2MiAzNDcuMTkxIDExOS4yNjcgMzQ3LjE5MSAxMTcuNDg1QzM0Ny4xOTEgMTE1LjU3NSAzNDYuNzE0IDExMy45ODQgMzQ1Ljc1OSAxMTIuNzExQzM0NC44NjggMTExLjQzOSAzNDMuNTk1IDExMC4zNTcgMzQxLjk0IDEwOS40NjZDMzQwLjI4NiAxMDguNTExIDMzOC40MDggMTA3LjY4NCAzMzYuMzA4IDEwNi45ODRDMzM0LjI3MSAxMDYuMjIgMzMyLjEzOSAxMDUuNDU2IDMyOS45MTIgMTA0LjY5MkMzMjQuNTAyIDEwMi44NDcgMzIwLjM2NSAxMDAuNDYgMzE3LjUwMiA5Ny41MzI2QzMxNC43MDEgOTQuNjA1IDMxMy4zMDEgOTAuNzU0NiAzMTMuMzAxIDg1Ljk4MTRDMzEzLjMwMSA4Mi4wOTkyIDMxNC4yNTYgNzguNzU3OSAzMTYuMTY1IDc1Ljk1NzZDMzE4LjA3NCA3My4xNTczIDMyMC43NDcgNzAuOTkzNSAzMjQuMTg0IDY5LjQ2NjFDMzI3LjYyMSA2Ny45Mzg2IDMzMS41MzUgNjcuMTc0OSAzMzUuOTI2IDY3LjE3NDlDMzQwLjQ0NSA2Ny4xNzQ5IDM0NC40MjMgNjcuOTcwNCAzNDcuODU5IDY5LjU2MTVDMzUxLjI5NiA3MS4wODg5IDM1NC4wMDEgNzMuMzE2NCAzNTUuOTc0IDc2LjI0NEMzNTcuOTQ3IDc5LjE3MTYgMzU4Ljk5NyA4Mi42MDgzIDM1OS4xMjQgODYuNTU0MkgzNDUuMjgyQzM0NS4yMTggODQuODM1OCAzNDQuNzczIDgzLjM0MDIgMzQzLjk0NSA4Mi4wNjczQzM0My4xODEgODAuNzk0NSAzNDIuMDY4IDc5Ljc3NjIgMzQwLjYwNCA3OS4wMTI1QzMzOS4yMDQgNzguMjQ4OCAzMzcuNTQ5IDc3Ljg2NjkgMzM1LjY0IDc3Ljg2NjlDMzMzLjk4NSA3Ny44MDMzIDMzMi40NTggNzguMDU3OCAzMzEuMDU4IDc4LjYzMDZDMzI5LjcyMSA3OS4xMzk4IDMyOC42NzEgNzkuOTM1MyAzMjcuOTA3IDgxLjAxNzJDMzI3LjE0MyA4Mi4wMzU1IDMyNi43NjIgODMuNDAzOCAzMjYuNzYyIDg1LjEyMjJDMzI2Ljc2MiA4Ni43MTMzIDMyNy4xMTIgODguMDQ5OCAzMjcuODEyIDg5LjEzMTdDMzI4LjU3NSA5MC4yMTM2IDMyOS42MjYgOTEuMTY4MyAzMzAuOTYyIDkxLjk5NTZDMzMyLjM2MiA5Mi43NTkzIDMzMy45ODUgOTMuNTIzMSAzMzUuODMxIDk0LjI4NjhDMzM3Ljc0IDk0Ljk4NjggMzM5Ljg3MiA5NS43NTA2IDM0Mi4yMjcgOTYuNTc3OUMzNDUuNiA5Ny43MjM1IDM0OC42ODcgOTkuMDkxOCAzNTEuNDg3IDEwMC42ODNDMzU0LjI4NyAxMDIuMjEgMzU2LjUxNSAxMDQuMjE1IDM1OC4xNjkgMTA2LjY5N0MzNTkuODg4IDEwOS4xNzkgMzYwLjc0NyAxMTIuMzkzIDM2MC43NDcgMTE2LjMzOUMzNjAuNzQ3IDExOS45MDMgMzU5LjgyNCAxMjMuMjEyIDM1Ny45NzggMTI2LjI2N0MzNTYuMTk2IDEyOS4yNTkgMzUzLjU1NSAxMzEuNjc3IDM1MC4wNTUgMTMzLjUyM0MzNDYuNTU1IDEzNS4zNjggMzQyLjIyNyAxMzYuMjkxIDMzNy4wNzIgMTM2LjI5MVpNMzkwLjg2NCAxMzYuMjkxQzM4Ni4wMjcgMTM2LjI5MSAzODEuNjk5IDEzNS40NjQgMzc3Ljg4MSAxMzMuODA5QzM3NC4xMjYgMTMyLjE1NCAzNzEuMTY2IDEyOS43MzYgMzY5LjAwMiAxMjYuNTU0QzM2Ni44MzggMTIzLjM3MiAzNjUuNjkzIDExOS41MjEgMzY1LjU2NiAxMTUuMDAzSDM3OS4yMTdDMzc5LjI4MSAxMTYuOTc1IDM3OS43NTggMTE4Ljc1NyAzODAuNjQ5IDEyMC4zNDlDMzgxLjYwNCAxMjEuOTQgMzgyLjk0IDEyMy4yMTIgMzg0LjY1OCAxMjQuMTY3QzM4Ni4zNzcgMTI1LjA1OCAzODguNDQ1IDEyNS41MDQgMzkwLjg2NCAxMjUuNTA0QzM5Mi44MzcgMTI1LjUwNCAzOTQuNTg3IDEyNS4yMTcgMzk2LjExNCAxMjQuNjQ0QzM5Ny42NDIgMTI0LjAwOCAzOTguODE5IDEyMy4xMTcgMzk5LjY0NiAxMjEuOTcxQzQwMC41MzcgMTIwLjc2MiA0MDAuOTgzIDExOS4yNjcgNDAwLjk4MyAxMTcuNDg1QzQwMC45ODMgMTE1LjU3NSA0MDAuNTA2IDExMy45ODQgMzk5LjU1MSAxMTIuNzExQzM5OC42NiAxMTEuNDM5IDM5Ny4zODcgMTEwLjM1NyAzOTUuNzMyIDEwOS40NjZDMzk0LjA3OCAxMDguNTExIDM5Mi4yIDEwNy42ODQgMzkwLjEgMTA2Ljk4NEMzODguMDYzIDEwNi4yMiAzODUuOTMxIDEwNS40NTYgMzgzLjcwNCAxMDQuNjkyQzM3OC4yOTQgMTAyLjg0NyAzNzQuMTU3IDEwMC40NiAzNzEuMjkzIDk3LjUzMjZDMzY4LjQ5MyA5NC42MDUgMzY3LjA5MyA5MC43NTQ2IDM2Ny4wOTMgODUuOTgxNEMzNjcuMDkzIDgyLjA5OTIgMzY4LjA0OCA3OC43NTc5IDM2OS45NTcgNzUuOTU3NkMzNzEuODY2IDczLjE1NzMgMzc0LjUzOSA3MC45OTM1IDM3Ny45NzYgNjkuNDY2MUMzODEuNDEzIDY3LjkzODYgMzg1LjMyNyA2Ny4xNzQ5IDM4OS43MTggNjcuMTc0OUMzOTQuMjM3IDY3LjE3NDkgMzk4LjIxNCA2Ny45NzA0IDQwMS42NTEgNjkuNTYxNUM0MDUuMDg4IDcxLjA4ODkgNDA3Ljc5MyA3My4zMTY0IDQwOS43NjYgNzYuMjQ0QzQxMS43MzkgNzkuMTcxNiA0MTIuNzg5IDgyLjYwODMgNDEyLjkxNiA4Ni41NTQySDM5OS4wNzRDMzk5LjAxIDg0LjgzNTggMzk4LjU2NCA4My4zNDAyIDM5Ny43MzcgODIuMDY3M0MzOTYuOTczIDgwLjc5NDUgMzk1Ljg2IDc5Ljc3NjIgMzk0LjM5NiA3OS4wMTI1QzM5Mi45OTYgNzguMjQ4OCAzOTEuMzQxIDc3Ljg2NjkgMzg5LjQzMiA3Ny44NjY5QzM4Ny43NzcgNzcuODAzMyAzODYuMjUgNzguMDU3OCAzODQuODQ5IDc4LjYzMDZDMzgzLjUxMyA3OS4xMzk4IDM4Mi40NjMgNzkuOTM1MyAzODEuNjk5IDgxLjAxNzJDMzgwLjkzNSA4Mi4wMzU1IDM4MC41NTQgODMuNDAzOCAzODAuNTU0IDg1LjEyMjJDMzgwLjU1NCA4Ni43MTMzIDM4MC45MDQgODguMDQ5OCAzODEuNjA0IDg5LjEzMTdDMzgyLjM2NyA5MC4yMTM2IDM4My40MTcgOTEuMTY4MyAzODQuNzU0IDkxLjk5NTZDMzg2LjE1NCA5Mi43NTkzIDM4Ny43NzcgOTMuNTIzMSAzODkuNjIzIDk0LjI4NjhDMzkxLjUzMiA5NC45ODY4IDM5My42NjQgOTUuNzUwNiAzOTYuMDE5IDk2LjU3NzlDMzk5LjM5MiA5Ny43MjM1IDQwMi40NzggOTkuMDkxOCA0MDUuMjc5IDEwMC42ODNDNDA4LjA3OSAxMDIuMjEgNDEwLjMwNyAxMDQuMjE1IDQxMS45NjEgMTA2LjY5N0M0MTMuNjggMTA5LjE3OSA0MTQuNTM5IDExMi4zOTMgNDE0LjUzOSAxMTYuMzM5QzQxNC41MzkgMTE5LjkwMyA0MTMuNjE2IDEyMy4yMTIgNDExLjc3IDEyNi4yNjdDNDA5Ljk4OCAxMjkuMjU5IDQwNy4zNDcgMTMxLjY3NyA0MDMuODQ3IDEzMy41MjNDNDAwLjM0NiAxMzUuMzY4IDM5Ni4wMTkgMTM2LjI5MSAzOTAuODY0IDEzNi4yOTFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNDIwNl8zNTMpIj48L3BhdGg+CjxwYXRoIGQ9Ik0xMTMuNDQ3IDEwMS4wNjNDMTEzLjQ0NyAxMDAuNjQxIDExMy4yNCAxMDAuMjQ3IDExMi45MDIgMTAwLjAyOUw5MC4yNjM2IDg1LjQyNTdMMTEyLjg2MyA3MS4xNjAzQzExMy4wOTkgNzEuMDEyNiAxMTMuMjczIDcwLjc3NjkgMTEzLjM1OSA3MC41MDYxQzExMy4zOTggNzAuMzgzIDExMy40MTggNzAuMjUyOCAxMTMuNDE4IDcwLjExOTFWNzAuMDEwMkMxMTMuNDE4IDY5LjU4ODEgMTEzLjIxMSA2OS4xOTQxIDExMi44NzIgNjguOTc2MUw3MC4zNzgzIDQxLjQ5MzNDNjkuNjA5NiA0MC45ODMzIDY4LjcwNjEgNDAuNTU3NyA2Ny42OTc2IDQwLjIyNzFDNjcuNjk0MyA0MC4yMjcxIDY3LjY5MSA0MC4yMjcxIDY3LjY4NzcgNDAuMjI3MUM2Ny42Mjg2IDQwLjIwOTUgNjcuNTY2MiA0MC4xOTIgNjcuNTAzNyA0MC4xNzQ0QzY3LjQ0MTMgNDAuMTU2OCA2Ny4zODIyIDQwLjEzOTIgNjcuMzE5OCA0MC4xMjE2QzY3LjI3MzggNDAuMTA3NiA2Ny4yMjQ1IDQwLjA5MzUgNjcuMTc4NSA0MC4wODI5QzY2LjI5MTUgMzkuODM2NyA2NS4zNTg1IDM5LjY3NDkgNjQuNDA5MSAzOS42MTUxQzY0LjMzMzUgMzkuNjExNiA2NC4yNjEzIDM5LjYwODEgNjQuMTg1NyAzOS42MDFDNjQuMTQ2MyAzOS42MDEgNjQuMTEwMSAzOS41OTc2IDY0LjA3MDcgMzkuNTk0MUM2NC4wNTEgMzkuNTk0MSA2NC4wMjggMzkuNTk0MSA2NC4wMDgzIDM5LjU5NDFDNjMuOTU5IDM5LjU5NDEgNjMuOTA2NSAzOS41ODcgNjMuODU3MiAzOS41ODdDNjMuODM3NSAzOS41ODcgNjMuODE3NyAzOS41ODcgNjMuNzk4IDM5LjU4N0M2MS41NTQyIDM5LjU0MTMgNTkuNDkxMSA0MC4wNTQ4IDU3Ljk3MDEgNDEuMDQzMUwxNC43NTMyIDY4Ljk4MzFDMTQuNDE0OSA2OS4yMDEyIDE0LjIwNzkgNjkuNTk1MiAxNC4yMDc5IDcwLjAxNzJWMTAxLjEzM0MxNC4yMDc5IDEwMS41NTUgMTQuNDE0OSAxMDEuOTQ5IDE0Ljc1MzIgMTAyLjE2N0wzNy40MTQ2IDExNi44MDJMMTQuNzYzMSAxMzEuMTE3QzE0LjQxODEgMTMxLjMzNSAxNC4yMDc5IDEzMS43MjkgMTQuMjA3OSAxMzIuMTU4VjEzMi4yNjdDMTQuMjA3OSAxMzIuMzQ4IDE0LjIxNDQgMTMyLjQyNSAxNC4yMjc2IDEzMi40OTlDMTQuMjkgMTMyLjgzIDE0LjQ3NzMgMTMzLjEyMSAxNC43NSAxMzMuMjk3TDQ2Ljk0NDkgMTU0LjExOUw1Ny4yNTA2IDE2MC43ODRDNTcuMjUwNiAxNjAuNzg0IDU3LjI3MzYgMTYwLjc5OCA1Ny4yODM1IDE2MC44MDVDNTcuNzUzMyAxNjEuMTA3IDU4LjI2MjUgMTYxLjM3OCA1OC43OTggMTYxLjYxQzU4Ljg0NzIgMTYxLjYzMSA1OC44OTY1IDE2MS42NTIgNTguOTQ1OCAxNjEuNjczQzU4Ljk4NTIgMTYxLjY5MSA1OS4wMjc5IDE2MS43MDkgNTkuMDY3NCAxNjEuNzI2QzU5LjM0OTkgMTYxLjg0MiA1OS42MzU3IDE2MS45NTEgNTkuOTI0OCAxNjIuMDQ2QzU5LjkyODEgMTYyLjA0NiA1OS45MzEzIDE2Mi4wNDYgNTkuOTM0NiAxNjIuMDQ2QzYwLjI3MyAxNjIuMTU1IDYwLjYyMTIgMTYyLjI0NyA2MC45Njk1IDE2Mi4zMjhDNjAuOTg5MiAxNjIuMzMxIDYxLjAwODkgMTYyLjMzNSA2MS4wMjg2IDE2Mi4zNDJDNjEuMTQzNiAxNjIuMzY2IDYxLjI1ODYgMTYyLjM5MSA2MS4zNzM1IDE2Mi40MTZDNjEuNDE5NSAxNjIuNDI2IDYxLjQ2MjIgMTYyLjQzMyA2MS41MDgyIDE2Mi40NEM2MS41NzcyIDE2Mi40NTQgNjEuNjQ5NSAxNjIuNDY1IDYxLjcxODUgMTYyLjQ3OUM2MS44MDA2IDE2Mi40OTMgNjEuODg2IDE2Mi41MDcgNjEuOTY4MiAxNjIuNTIxQzYyLjAyNzMgMTYyLjUzMiA2Mi4wODMyIDE2Mi41MzkgNjIuMTQyMyAxNjIuNTQ2QzYyLjYwNTUgMTYyLjYxMyA2My4wNzg2IDE2Mi42NTUgNjMuNTU0OSAxNjIuNjcyQzYzLjcyOSAxNjIuNjc5IDYzLjkwMzIgMTYyLjY4MyA2NC4wNzczIDE2Mi42ODNDNjYuMjIyNSAxNjIuNjgzIDY4LjE5MDQgMTYyLjE2OSA2OS42NTU2IDE2MS4yMTZMMTEyLjg3MiAxMzMuMjk0QzExMy4yMTEgMTMzLjA3NiAxMTMuNDE4IDEzMi42ODIgMTEzLjQxOCAxMzIuMjZWMTAxLjUwOUMxMTMuNDM3IDEwMS40MjIgMTEzLjQ0NyAxMDEuMzMgMTEzLjQ0NyAxMDEuMjM5VjEwMS4wNjZWMTAxLjA2M1pNNjQuOTUxMSA0Mi4wODA2QzY1LjQ5NjUgNDIuMTUxIDY2LjA0MTggNDIuMjU2NSA2Ni41NzQgNDIuNDAwN0M2Ny41MjM1IDQyLjY2NDUgNjguNDI2OSA0My4wNDc5IDY5LjIwNTUgNDMuNTU0NEwxMTAuMTc1IDcwLjA0ODhMOTAuOTg2NCA4Mi4xNjE4TDg4LjA2OTEgODQuMDAxM0w2NC45NTExIDY5LjA4ODZWNDIuMDgwNlpNMTYuNDU4MiA3MC42ODlMNTkuMTI5OCA0My4xMDA2QzYwLjA4OSA0Mi40NzgxIDYxLjM0NzMgNDIuMTE5MyA2Mi42OTc1IDQyLjAxNzNWNjkuMzEwM0wzOS4xNTI0IDg0LjUxNDhMMzUuMzU0NyA4Ni45NTU3TDE2LjQ2NDggOTkuMTUzVjcwLjY4NTRMMTYuNDU4MiA3MC42ODlaTTYyLjY2NzkgMTYwLjE3OUM2Mi4zNTI2IDE2MC4xNCA2Mi4wMzM5IDE2MC4wODcgNjEuNzIxOCAxNjAuMDI0QzYxLjY3MjUgMTYwLjAxMyA2MS42MjMyIDE2MC4wMDMgNjEuNTczOSAxNTkuOTkyQzYxLjU0MTEgMTU5Ljk4NSA2MS41MTE1IDE1OS45NzggNjEuNDgyIDE1OS45NzFDNjAuOTM2NiAxNTkuODQ1IDYwLjQwNDQgMTU5LjY3OSA1OS44OTg1IDE1OS40NzVDNTkuODkxOSAxNTkuNDc1IDU5Ljg4NTQgMTU5LjQ3MiA1OS44ODIxIDE1OS40NjhDNTkuODA5OCAxNTkuNDM3IDU5LjczNDIgMTU5LjQwNSA1OS42NjIgMTU5LjM3M0M1OS41OTk1IDE1OS4zNDUgNTkuNTMzOSAxNTkuMzE3IDU5LjQ3MTQgMTU5LjI4OUM1OS40NTgzIDE1OS4yODIgNTkuNDQ4NCAxNTkuMjc4IDU5LjQzNTMgMTU5LjI3MUM1OS4wNzcyIDE1OS4xMDIgNTguNzM1NSAxNTguOTEzIDU4LjQxNjkgMTU4LjcwOUwxNy40NDcxIDEzMi4yMTRMMzkuNTUzMiAxMTguMjQ0TDYyLjY3MTIgMTMzLjE3MVYxNjAuMTc1TDYyLjY2NzkgMTYwLjE3OVpNNjMuNjI3MiAxMzAuOTcyTDYxLjk3MTUgMTI5LjkwM1Y5OS4xODQ3QzYxLjk3MTUgOTguNzYyNyA2MS43NjQ1IDk4LjM2ODggNjEuNDI2MSA5OC4xNTA3TDQ0LjY0MiA4Ny4zMDM5TDQxLjkxODYgODUuNTUyM0w2My45OTUyIDcxLjI5NzRMNjYuNzgxIDczLjA5ODJMNjcuOTMwOCA3My44NDAzVjEwNC40OTZDNjcuOTMwOCAxMDQuOTE4IDY4LjEzNzggMTA1LjMxMiA2OC40NzYxIDEwNS41M0w4My4wMDY2IDExNC45MDZMODUuNzYyOSAxMTYuNjgyTDYzLjYyMDYgMTMwLjk3OUw2My42MjcyIDEzMC45NzJaTTExMS4xNjEgMTMxLjU3NEw2OC40ODkzIDE1OS4xNDVDNjcuNTI2NyAxNTkuNzcxIDY2LjI3MTggMTYwLjEzIDY0LjkyMTYgMTYwLjIzNVYxMzIuOTUzTDg4LjQ2OTkgMTE3Ljc0OEw5Mi4yNzA5IDExNS4yOUwxMTEuMTYxIDEwMy4wOTJWMTMxLjU3NFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl80MjA2XzM1MykiPjwvcGF0aD4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl80MjA2XzM1MyIgeDE9IjI4MS40OTQiIHkxPSI1Mi4xNDU1IiB4Mj0iMjgxLjQ5NCIgeTI9IjE1My4xNDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjAwMCI+PC9zdG9wPgo8c3RvcCBvZmZzZXQ9IjAuNTQ2ODc1IiBzdG9wLWNvbG9yPSIjRkZGMDAwIj48L3N0b3A+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgxNzcwQiI+PC9zdG9wPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNDIwNl8zNTMiIHgxPSI2My44Mjc2IiB5MT0iMzkuNTg0MiIgeDI9IjYzLjgyNzYiIHkyPSIxNjIuNjgzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkU5OUEiPjwvc3RvcD4KPHN0b3Agb2Zmc2V0PSIwLjU0Njg3NSIgc3RvcC1jb2xvcj0iI0ZGRUMxQyI+PC9zdG9wPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBRkEyMTEiPjwvc3RvcD4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "layout": "editorial",
  "accent": "#FFF000",
  "heroImage": true
} /*EDITMODE-END*/;

const ACCENTS = ["#FFF000", "#FFEC1C", "#F4C20C", "#E0A800"];

function Topbar({ activePath }) {
  const print = () => window.print();
  return (
    <header className="topbar no-print">
      <a href="#top" className="brand" style={{ textDecoration: "none", color: "var(--ink)" }}>
        {P_.integrator.logo ?
        <img className="integrator-logo" src={P_.integrator.logo} alt="Logo do integrador" /> :
        <span className="integrator-logo-ph mono">logo do integrador</span>}
      </a>
      <div className="flex items-center gap-s">
        <div className="bess-lockup">
          <span className="bess-cap" style={{ color: "rgb(226, 226, 226)" }}>Gerado na plataforma</span>
          <img className="bess-logo" src={BESS_LOGO} alt="+BESS" />
        </div>
        <button className="btn btn-primary btn-sm" onClick={print} style={{ borderRadius: "6px" }}>
          <Icon name="download" style={{ width: 15, height: 15 }} /> Baixar PDF
        </button>
      </div>
      <SectionRail activePath={activePath} />
    </header>);

}

function SectionRail({ activePath }) {
  const steps = [
  { id: "inst", href: "#institucional", num: "01", label: "Por que baterias?" },
  { id: "prop", href: "#proposta", num: "02", label: "Proposta Comercial" }];

  return (
    <nav className="section-rail no-print" aria-label="Seções da proposta">
      <div className="section-rail-inner">
        {steps.map((s) =>
        <a key={s.id} href={s.href} className={`rail-step ${activePath === s.id ? "active" : ""}`}>
            <span className="rail-num mono">{s.num}</span>
            <span className="rail-label">{s.label}</span>
          </a>
        )}
      </div>
    </nav>);

}

function Hero() {
  return (
    <section id="top" style={{ paddingTop: "clamp(120px,15vh,180px)", paddingBottom: "clamp(60px,8vw,110px)" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,6vw,72px)" }}>
        <Reveal>
          <div className="flex between items-center wrap-row" style={{ gap: 16 }}>
            <div className="flex items-center gap-s">
              <span className="body" style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".12em", display: "inline-flex", alignItems: "center", gap: "10px" }}>
                Proposta intransferível
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }}></span>
                Válida até <PH name="quote_validity">{P_.meta.validUntil}</PH>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid" style={{ gridTemplateColumns: "1.25fr 0.75fr", gap: "clamp(28px,5vw,64px)", alignItems: "end" }}>
          <div>
            <Reveal>
              <div className="kicker" style={{ marginBottom: 22 }}>Proposta comercial</div>
              <h1 className="display" style={{ marginBottom: 26 }}>
                Soluções inteligentes de <span className="acc"><span style={{ fontStyle: "italic", fontWeight: "600" }}>armazenamento</span> de energia</span>.
              </h1>
              <p className="lead" style={{ fontSize: "clamp(1.1rem,1.7vw,1.45rem)", maxWidth: "40ch", fontWeight: "500" }}>
                Energia sob controle.<br />
                Operações e estilo de vida protegidos.<br />
                <strong style={{ color: "var(--ink)", margin: "0px", padding: "0px" }}><PH name="client_name">{P_.client.name}</PH></strong>.
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="card" style={{ background: "var(--surface)" }}>
              <div className="grid" style={{ gap: 14 }}>
                {[["Cliente", P_.client.name, "client_name"], ["Projeto", P_.client.project, null], ["Emissão", P_.meta.quoteDate, "quote_date"], ["Consultor", `${P_.integrator.userNome} ${P_.integrator.userSobrenome}`, "user_nome / user_sobrenome"]].map(([k, v, ph], i) =>
                <div key={k} className="flex between items-center" style={{ paddingBottom: 12, borderBottom: i < 3 ? "1px solid var(--line-2)" : "none", gap: 16 }}>
                    <span className="body" style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".08em" }}>{k}</span>
                    <span style={{ textAlign: "right", fontSize: ".92rem", fontWeight: "500" }}>{ph ? <PH name={ph}>{v}</PH> : v}</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* TWO PATHS */}
        <Reveal delay={200}>
          <div className="grid g-2">
            <a href="#institucional" className="path-card card card-hover invert" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="flex between items-center" style={{ marginBottom: 30 }}>
                <div className="icon-chip"><Icon name="leaf" /></div>
                <Icon name="arrow" className="ar" style={{ width: 22, height: 22, color: "var(--ink-3)" }} />
              </div>
              <div className="body" style={{ fontSize: ".78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 10 }}>Trilha 1 · Entenda</div>
              <h2 className="h-sub" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)", marginBottom: 10 }}>Por que baterias?</h2>
              <p className="body" style={{ fontSize: ".95rem", maxWidth: "36ch", fontWeight: "500" }}>O contexto, a tecnologia e por que esta é a hora de assumir o controle da sua energia.</p>
            </a>
            <a href="#proposta" className="path-card card card-hover" style={{
              textDecoration: "none", color: "inherit", display: "block",
              background: "var(--accent)", borderColor: "var(--accent)"
            }}>
              <div className="flex between items-center" style={{ marginBottom: 30 }}>
                <div className="icon-chip" style={{ background: "rgba(10,10,11,.12)", borderColor: "rgba(10,10,11,.18)", color: "var(--on-accent)" }}><Icon name="bolt" /></div>
                <Icon name="arrow" className="ar" style={{ width: 22, height: 22, color: "var(--on-accent)" }} />
              </div>
              <div style={{ fontSize: ".78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 10, color: "rgba(10,10,11,.65)" }}>Trilha 2 · Decida</div>
              <h2 className="h-sub" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)", marginBottom: 10, color: "var(--on-accent)" }}>Ver proposta comercial</h2>
              <p style={{ fontSize: ".95rem", maxWidth: "36ch", color: "rgba(10,10,11,.72)", fontWeight: "500" }}>Direto aos números: dimensionamento, comparador de kits e investimento.</p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}

function Footer() {
  const print = () => window.print();
  return (
    <footer className="footer" id="contato">
      <div className="wrap">
        <Reveal>
          <div className="cta-final">
            <div className="cta-glow" aria-hidden="true"></div>
            <div className="cta-inner">
              <div className="kicker" style={{ marginBottom: 18 }}>{P_.cta.eyebrow}</div>
              <h2 className="cta-head">
                <strong><PH name="client_name">{P_.client.name}</PH></strong>, conquiste a sua<br />
                <span className="acc">verdadeira independência energética</span>
              </h2>
              <div className="cta-actions">
                <a href={P_.cta.primaryHref} className="btn btn-primary btn-lg">
                  {P_.cta.primary} <Icon name="arrow" className="ar" style={{ width: 19, height: 19 }} />
                </a>
                <button className="btn btn-ghost btn-lg" onClick={print} style={{ borderColor: "rgb(255, 240, 0)" }}>
                  <Icon name="download" style={{ width: 17, height: 17, color: "var(--accent)" }} /> {P_.cta.secondary}
                </button>
              </div>
              <p className="cta-fine">Proposta válida até <PH name="quote_validity">{P_.meta.validUntil}</PH>. Sujeita a análise técnica do local.</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid" style={{ gridTemplateColumns: "1.2fr 0.8fr", gap: "clamp(28px,5vw,56px)", alignItems: "center", marginBottom: 48, marginTop: "clamp(48px,7vw,88px)" }}>
            <div>
              <h2 className="h-sec" style={{ fontSize: "clamp(1.6rem,3.4vw,2.6rem)", marginBottom: 18, color: "var(--ink)" }}>
                Fale com quem cuida do<br />seu <span className="acc">projeto de energia</span>.
              </h2>
              <p className="lead" style={{ fontWeight: "500" }}>Tire dúvidas e dê o próximo passo rumo à autonomia —
seu consultor acompanha você de ponta a ponta.</p>
            </div>
            <div className="card invert contact-card" style={{ textAlign: "center", padding: "clamp(28px,4vw,44px)" }}>
              <div className="avatar-ring">
                {P_.integrator.photo ? <img src={P_.integrator.photo} alt="Consultor" /> :
                <span className="avatar-ph"><Icon name="user" /></span>}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: 22, letterSpacing: "-0.02em" }}><PH name="user_nome / user_sobrenome">{P_.integrator.userNome} {P_.integrator.userSobrenome}</PH></h3>
              <div className="contact-row"><Icon name="phone" /><span><PH name="user_telefone">{P_.integrator.phone}</PH></span></div>
            </div>
          </div>
        </Reveal>
        <p className="punch" style={{ marginBlock: "clamp(30px,5vw,60px)", maxWidth: "26ch" }}>
          Sua energia. <span className="acc">
Sob controle.</span> Sempre.
        </p>
        <div className="flex between wrap-row" style={{ gap: 16, paddingTop: 28, borderTop: "1px solid var(--line-2)", fontSize: ".78rem", letterSpacing: ".04em", textTransform: "uppercase" }}>
          <span style={{ fontWeight: 700, color: "var(--ink-2)" }}>Gerado na plataforma +BESS</span>
          <span><PH name="user_endereco">{P_.integrator.address}</PH></span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>);
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle no-print" role="group" aria-label="Tema da proposta">
      <button className={theme === "light" ? "active" : ""} onClick={() => setTheme("light")} aria-pressed={theme === "light"}>
        <Icon name="sun" /><span className="tlabel">Claro</span>
      </button>
      <button className={theme === "dark" ? "active" : ""} onClick={() => setTheme("dark")} aria-pressed={theme === "dark"}>
        <Icon name="moon" /><span className="tlabel">Escuro</span>
      </button>
    </div>);

}

function PHToggle({ on, setOn }) {
  return (
    <div className="theme-toggle ph-toggle no-print" role="group" aria-label="Marcar placeholders">
      <button className={on ? "active" : ""} onClick={() => setOn((v) => !v)} aria-pressed={on} title="Destacar os campos dinâmicos (placeholders) para o desenvolvedor">
        <span style={{ fontSize: 13 }}>🔖</span><span className="tlabel">{on ? "Placeholders on" : "Placeholders"}</span>
      </button>
    </div>);

}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [activePath, setActivePath] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("bess-theme") || "dark");
  const [showPH, setShowPH] = useState(() => localStorage.getItem("bess-showph") === "1");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("bess-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("show-ph", showPH);
    localStorage.setItem("bess-showph", showPH ? "1" : "0");
  }, [showPH]);

  useEffect(() => {
    const inst = document.getElementById("institucional");
    const prop = document.getElementById("proposta");
    if (!inst || !prop) return;
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) setActivePath(e.target.id === "proposta" ? "prop" : "inst");
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    io.observe(inst);io.observe(prop);
    return () => io.disconnect();
  }, []);

  // Failsafe: never leave content hidden if an observer misses.
  useEffect(() => {
    const id = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((e) => e.classList.add("in"));
    }, 1600);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="app" data-layout={t.layout} style={{ "--accent": t.accent }}>
      <Topbar activePath={activePath} />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <PHToggle on={showPH} setOn={setShowPH} />
      <Hero />
      <InstitutionalTrack />
      <CommercialTrack />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Layout geral" />
        <TweakRadio label="Direção" value={t.layout}
        options={["editorial", "centro", "revista"]}
        onChange={(v) => setTweak("layout", v)} />
        <TweakSection label="Acento" />
        <TweakColor label="Amarelo" value={t.accent} options={ACCENTS}
        onChange={(v) => setTweak("accent", v)} />
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);