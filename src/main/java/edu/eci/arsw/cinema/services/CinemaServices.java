/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.cinema.services;

import edu.eci.arsw.cinema.model.Cinema;
import edu.eci.arsw.cinema.model.CinemaFunction;
import edu.eci.arsw.cinema.model.Movie;
import edu.eci.arsw.cinema.persistence.CinemaException;
import edu.eci.arsw.cinema.persistence.CinemaPersistenceException;
import edu.eci.arsw.cinema.persistence.CinemaPersitence;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author cristian
 */
@Service
public class CinemaServices {
    @Autowired
    CinemaPersitence cps=null;
    public CinemaPersitence getCps() {
    	return cps;
    }
    public void setCps(CinemaPersitence cps) {
    	this.cps=cps;
    }
    
    public void addNewCinema(Cinema c) throws CinemaPersistenceException{
    	cps.saveCinema(c);
        
    }
    
    public Set<Cinema> getAllCinemas(){
    	return cps.getAllCinemas();
        
    }
    
    /**
     * 
     * @param name cinema's name
     * @return the cinema of the given name created by the given author
     * @throws CinemaException
     * @throws CinemaPersistenceException 
     */
    public Cinema getCinemaByName(String name) throws CinemaException, CinemaPersistenceException{
        return cps.getCinema(name);
    }
    
    
    public void buyTicket(int row, int col, String cinema, String date, String movieName) throws CinemaException, CinemaPersistenceException{
    	cps.buyTicket(row, col, cinema, date, movieName);
    }
    
    public List<CinemaFunction> getFunctionsbyCinemaAndDate(String cinema, String date) throws CinemaPersistenceException {
        return cps.getFunctionsbyCinemaAndDate(cinema, date) ;
    }
    public List<Movie> filtrar(String cinema,String date,String category){
		return cps.filtrar(cinema, date, category);
    }
   


}
