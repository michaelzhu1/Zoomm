# Zoomm
[Zoomm live](https://zoomm.herokuapp.com/#/) is a photo sharing full-stack web application based closely on 500px. Zoomm allows users to publicly share their best photos in the elite photographer community. I created Zoomm using Ruby on Rails and React/Redux.


![Live Home Page](https://github.com/michaelzhu1/Zoomm/blob/master/docs/README/homepage_gif.gif)

![Live Login](https://github.com/michaelzhu1/Zoomm/blob/master/docs/README/loginpage_gif.gif)

## Feature 
* Highly secure authentication for user login and signup
* Upload, edit, delete photos
* Setting personalized profile photo and cover photo in User Profile page
* Follow other users and their photos would show up in User Feed page
* Discover all the amazing photos brought by other great photographers in Zoomm community


### User Authentication 
#### Password Encryption 
The database store the BCrypt `password_digest` instead of User's actual password.

#### User Session Token
I used `SecureRandom` to ensure each user has an unique `session_token` when they are signed in. Their `session_token` resets when they sign out.

```ruby
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
```

#### Fetching user's own photo
I used ActiveRecord to query Photo table based off the user id sent from the frontend. 
```ruby
  def index
    if params[:id]
      @photos = Photo.where("author_id = ?", params[:id])
    else
      @photos = Photo.all
    end
    render "api/photos/index"
  end
```

#### Fetching photos based off user's followees
I created a customized route for User's feed page. 

```ruby
  def index_feed
    @photos = [];
    current_user.followings.each do |followee|
      @photos.push(followee.photos)
    end
    @photos = @photos.flatten
    render "api/photos/index"
  end
```
#### Front-end Auth
Users can't visit `/#/login` or `/#/signup` routes if they are already logged in on the front-end.
```javascript
const Auth = ({ component: Component, path, loggedIn, currentUser }) => (
  <Route
    path={path}
    render={props =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/user/${currentUser.id}`} />
      )}
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />}
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
```

### Upload
I used Cloudinary to host photos storage. Users are able to upload photos. The upload form pops up using Modal, and it gives the preview for that photo, along with title and description input.

![uploadform]()

![uploaddemo]()

## Technology
***
Zoomm was created utilizing these key technologies:

### Frontend
* jQuery
* Webpack
* React/Redux
* React DOM
* React Router
* React Modal

### Backend
* Ruby on Rails
* PostgreSQL database
* Cloudinary image storage


## Future Implementation
***
#### Likes 
User has the ability to like photos from Feed and Discover page, but not their own photos.
#### Comments
User has the ability to comment on photos from Feed and Discover page. User can also like or comment on the comments.
#### Tags
Each photo can have a maximum amount 10 tags, which will eventaully be used to sort into different albums.

***
See the development ![README](https://github.com/michaelzhu1/Zoomm/wiki) for a list of components, sample state, DB schema, and wireframes.
