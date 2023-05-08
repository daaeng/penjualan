// https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example

// const {setAuth} = useContext(AuthContext);  


    // const userRef = useRef();
    // const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false); 

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await axios
    //       .post(
    //         LOGIN_URL,
    //         JSON.stringify({ user, pwd }),
    //         {
    //           headers: { "Content-Type": "application/json" },
    //           credentials: true,
    //           origin: true,
    //         }
    //       );
    //       const accessToken = response?.data?.accessToken;
    //       const roles = response?.data?.roles;
    //       setAuth({ user, pwd, roles, accessToken });
    //     //   setUser("");
    //     //   setPwd("");
    //       setSuccess(true);
    //     } catch (err) {
    //       if (!err?.response) {
    //         setErrMsg("Server belum merespon");
    //       } else if (err.response?.status === 400) {
    //         setErrMsg("Missing Username or Password");
    //       } else if (err.response?.status === 401) {
    //         setErrMsg("Unauthorized");
    //       } else {
    //         setErrMsg("Login Failed");
    //       }
    //       errRef.current.focus();
    //     }
    //     console.log(user, pwd);
    //     console.log(origin);
    //   };

    //-------------------------------------------------------------------------------------------------------------------------------------------------


// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users


// export default [
//     {
//         id: 1,
//         lastName: 'Snow',
//         firstName: 'Jon',
//         age: '35',
//         lastransaksi: '01/01/2023',
//         ttransaksi: 25,
//         pembelian: ''
//     },
    
//     {
//         id: 2,
//         lastName: 'Cersei',
//         firstName: 'Lannister',
//         age: 42,
//         lastransaksi: '02/01/2023',
//         ttransaksi: 38,
//         pembelian: ''
//     },

//     {
//         id: 3,
//         lastName: 'Lannister',
//         firstName: 'Jaime ',
//         age: 31,
//         lastransaksi: '10/01/2023',
//         ttransaksi: 17,
//         pembelian: ''
//     },

//     {
//         id: 4,
//         lastName: 'Stark',
//         firstName: 'Arya ',
//         age: 19,
//         lastransaksi: '03/01/2023',
//         ttransaksi: 3,
//         pembelian: ''
//     },

//     {
//         id: 5,
//         lastName: 'Targaryen',
//         firstName: 'Daenerys ',
//         age: null,
//         lastransaksi: '08/01/2023',
//         ttransaksi: 10,
//         pembelian: ''
//     },

//     {
//         id: 6,
//         lastName: '',
//         firstName: 'Melisandre',
//         age: 29,
//         lastransaksi: '09/01/2023',
//         ttransaksi: 60,
//         pembelian: ''
//     },

//     {
//         id: 7,
//         lastName: 'Clifford',
//         firstName: 'Ferrara ',
//         age: 44,
//         lastransaksi: '06/01/2023',
//         ttransaksi: 10,
//         pembelian: ''
//     },

//     {
//         id: 8,
//         lastName: 'Frances',
//         firstName: 'Rossini ',
//         age: 36,
//         lastransaksi: '05/01/2023',
//         ttransaksi: 46,
//         pembelian: ''
//     },

//     {
//         id: 9,
//         lastName: 'Roxie',
//         firstName: 'Harvey',
//         age: 18,
//         lastransaksi: '07/01/2023',
//         ttransaksi: 2,
//         pembelian: ''
//     },

//     {
//         id: 10,
//         lastName: 'Zahro',
//         firstName: 'Aulia ',
//         age: 24,
//         lastransaksi: '04/01/2023',
//         ttransaksi: 53,
//         pembelian: ''
//     },
// ]

