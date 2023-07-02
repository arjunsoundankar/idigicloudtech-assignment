 

### `Following command to run project`

1. run command "npm i"
2. run command "npm start"
3. go to browser and enter URL - http://localhost:3000/ App is running now.

### `Breadcrums`

On each page top there is a box with the shadow is Breadcrumbs.

### `Analysis Route make access to admin only`
In `App.tsx` I have added one variable isAdmin at line 13.
right now its `true`. So when you click analysis in sidebar you can access that route.
If you change the isAdmin to `false` and then you click analysis in sidebar you redirect to url 404.


### `Changes In router json`
1. Added component variable in projects routes.
2. Added icon or change icon variable name to display icon in `sidebar.tsx`.
3. There is no component variable in project json so added that.
4. change the component variable value for dashboard json to get specific path.

### `Dummy Pages`
There is dummy page the project list and login page which is copy from material Ui. 

