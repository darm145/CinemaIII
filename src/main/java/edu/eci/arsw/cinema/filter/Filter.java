package edu.eci.arsw.cinema.filter;

import java.util.List;

import edu.eci.arsw.cinema.model.Movie;
import edu.eci.arsw.cinema.persistence.CinemaPersitence;

public interface Filter {
	public List<Movie> filter(CinemaPersitence c,String cinema,String date,String category);
}
