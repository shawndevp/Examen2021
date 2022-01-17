import React, {useState, useEffect} from 'react'
import axios from "axios";
import style from '../style.css';
import server from '../Global/Server';

function Profile({
 username,
 email,
 firstname,
 lastname,
 created
})

{ 
    console.log(firstname)


    const userId = localStorage.getItem('user_id');
    const splitCreated = created.split('T');

    const useGetProfileInfo = () => {
        const [userInfo, setUserInfo] = useState([]);
        const [loading, setLoading] = useState(true);
    
        const getProfileInfo = async () => {
          try {
            const response = await axios.get(`${server}/api/Users/${userId}`);
            setUserInfo(response.data);
          } catch (err) {
            console.log(err);
          }
    
          setLoading(false);
        };
    
        useEffect(() => {
          getProfileInfo();
        }, []);
    
        return {
          userInfo,
          loading,
        };
      };
    
      const { userInfo, loading } = useGetProfileInfo();


    let editValues = {
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        created: created
    }

    const [editUserValue, setEditValue] = useState(editValues);

    function editUser(e) {
        e.preventDefault();

        const editUserValues = async () => {
            await axios
            .put(`${server}/api/Users/${userId}`, {
                Firstname: editUserValue.firstname,
                Lastname: editUserValue.lastname,
                email: editUserValue.email

            })
            // .then(window.location.reload());
        };
        editUserValues();
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    function onChangeUser(e) {
        setEditValue({
            ...editUserValue,
            [e.target.name]: capitalizeFirstLetter(e.target.value),
        });

    }
    console.log(editUserValue.firstname)


    return (
        <>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
      

        <div className="profile-container pt-5" style={{backgroundColor: ''}}>
<div className="row justify-content-center pt-5">
    <div className="col-12 col-lg-10 col-xl-8 mx-auto">
        <h2 className="h3 mb-4 page-title">Inställningar</h2>
        {/* <p>{!loading?userInfo.Firstname:<></>}</p> */}
        <div className="my-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Profil</a>
                </li>
                <li className="nav-item pl-2">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Bokningar</a>
                </li>
            </ul>
            <form>
                <div className="row mt-5 align-items-center">
                    <div className="col-md-3 text-center mb-5">
                        <div className="avatar avatar-xl">
                            <img src="https://gravatar.com/avatar/a0310ba74bcd933a1f4a3cb00de31fea?s=400&d=mp&r=x" alt="..." className="avatar-img rounded-circle" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <h4 className="mb-1">{editUserValue.firstname}<span className='p-1'></span>{editUserValue.lastname}</h4>
                                <p className="medium mb-3"><span className="badge badge-dark">Användarnamn: {editUserValue.username}</span></p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-7">
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst.
                                </p>
                            </div>
                            <div className="col">
                                <p className="small mb-0 text-muted">Konto skapat:</p>
                                <p className="small mb-0 text-muted">{splitCreated[0]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="firstname">Förnamn</label>
                        <input type="text" name="firstname" id="firstname" className="form-control" placeholder="Förnamn" onChange={onChangeUser} value={editUserValue.firstname} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="lastname">Efternamn</label>
                        <input type="text" name="lastname" id="lastname" className="form-control" placeholder="Efternamn"  onChange={onChangeUser} value={editUserValue.lastname} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="adress">Adress</label>
                        <input type="text" id="adress" className="form-control" placeholder="Sveavägen 120"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="city">Land</label>
                        <input type="text" id="city" className="form-control" placeholder="Sverige" />
                    </div>
                </div>
                <div className="form-row">
                    
                    <div className="form-group col-md-4">
                        <label for="inputState5">Stad</label>
                        <select id="inputState5" className="form-control">
                            <option selected="">Välj...</option>
                            <option>Stockholm</option>
                            <option>....</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip5">Postnr</label>
                        <input type="text" pattern='/d*' maxlength='5' className="form-control" id="inputZip5" placeholder="123 45" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="din@Email.se" onChange={onChangeUser} value={editUserValue.email} />
                </div>
             
                
                <hr className="my-4" />
                
                <button type="submit" className="btn btn-primary" onClick={editUser}>Spara ändringar</button>
                <span className="pl-3"></span>
                <button type="submit" className="btn btn-danger">Radera konto</button>
            </form>
        </div>
    </div>
</div>

</div>
        </>
    )
}

export default Profile
