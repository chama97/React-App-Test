import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../../component/common/Button"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class ItemPage extends Component {
    
    constructor(props) {
        super(props);

        this.rows = {
            setRows :{
                id: "",
                type: "",
                qty: "",
                price: ""
          },

        }
    }
   
    addItem() {
        let addFormData = this.rows.addFormData
            this.setRows ({
                id: addFormData.id,
                type: addFormData.type,
                qty: addFormData.qty,
                price: addFormData.price,
            })
    }


    render() {
        const { classes } = this.props;
        return (
            <Fragment className={classes.container}>
                <Typography variant="h4" style={{display: 'flex'}} justifyContent="Center">
                    Item Manage
                </Typography>
                <Grid container spacing={3} marginTop='10px' >
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}} justifyContent="Center">
                        <TextField id="outlined-basic" name="id" placeHolder="Id" label="Item Id" variant="outlined" size="small"
                        style={{width: '90%'}}
                        onChange={(e) => {
                            console.log(e.target.value)
                            let addFormData = this.rows.addFormData
                            addFormData.name = e.target.value
                            this.setRows({ addFormData })           
                        }} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}} justifyContent="Center">
                        <TextField id="outlined-basic" name="type" placeHolder="type" label="Item Type" variant="outlined" size="small" 
                        style={{width: '90%'}}
                        onChange={(e) => {
                            console.log(e.target.value)
                            let addFormData = this.rows.addFormData
                            addFormData.address = e.target.value
                            this.setRows({ addFormData })
                            
                        }}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}} justifyContent="Center">
                        <TextField id="outlined-basic" name="qty" placeHolder="qty" label="Item Qty" variant="outlined" size="small" 
                        style={{width: '90%'}}
                        onChange={(e) => {
                            console.log(e.target.value)
                            let addFormData = this.rows.addFormData
                            addFormData.address = e.target.value
                            this.setRows({ addFormData })
                            
                        }}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}} justifyContent="Center">
                        <TextField id="outlined-basic" name="price"  placeHolder="salary" label="Item Price" variant="outlined" size="small"
                        style={{width: '90%'}}
                        onChange={(e) => {
                            console.log(e.target.value)
                            let addFormData = this.rows.addFormData
                            addFormData.salary = e.target.value
                            this.setRows({ addFormData })
                            
                        }}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" marginRight={"35px"}>
                    <GDSEButton size="small" variant="contained" label="cancel" color="error"
                            onClick={() => {
                                console.log('Canceled Item')
                                this.cancelItem()
    
                            }}
                        />
                        <GDSEButton size="small" variant="contained" label="save"
                            onClick={() => {
                                console.log('Save Item')
                                this.addItem()
    
                            }}
                        />
                        
                    </Grid>
                </Grid>
                
                <TableContainer component={Paper} className={classes.container}>
                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
        
                                <TableRow>    
                                    <TableCell align="left">{this.rows.id}</TableCell>
                                    <TableCell align="left">{this.rows.type}</TableCell>
                                    <TableCell align="left">{this.rows.qty}</TableCell>
                                    <TableCell align="left">{this.rows.price}</TableCell>
                                </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>

            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(ItemPage)