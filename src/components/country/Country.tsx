import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { CountryDetail } from '../../interfaces/country';


export default function Country({ country }: { country: CountryDetail }) {
    const navigate = useNavigate();

    const viewCountry = () => {
        navigate(`/${country.name.common}`);
    }
    return (
        <Card sx={{ margin: 0 }} onClick={() => viewCountry()}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={country.flags['png']} alt="green iguana" />
                <CardContent>
                    <Typography gutterBottom component="div" sx={{ fontWeight: 'bolder' }}>{country.name.common}</Typography>
                    <Grid container spacing={0}>
                        <Grid item sx={{ display: 'flex' }} xs={12}>
                            <Typography variant="body2" >Population : </Typography>
                            <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">{country.population}</Typography>
                        </Grid>
                        <Grid item sx={{ display: 'flex' }} xs={8}>
                            <Typography variant="body2" >Region : </Typography>
                            <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">{country.region}</Typography>
                        </Grid>
                        <Grid item sx={{ display: 'flex' }} xs={8}>
                            <Typography variant="body2" >Capital : </Typography>
                            <Typography variant="body2" sx={{ mx: 1 }} color="text.secondary">{country.capital}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
