# Local development

To allow local development, the `react` and `react-redux` package need to be linked from `arwen` to the main project. This can be done with these steps:

1. `~$ cd arwen/`
2. `~$ yarn link`
3. `~$ cd node_modules/react/`
4. `~$ yarn link`
5. `~$ cd ../react-redux/`
6. `~$ yarn link`
7. `~$ cd ~/MAIN_PROJECT`
8. `~$ yarn link arwen`
9. `~$ yarn link react`
10. `~$ yarn link react-redux`

It's possible that this can also be done by overriding the webpack aliases for these packages in the main project. See here for more information: https://webpack.js.org/configuration/resolve/
