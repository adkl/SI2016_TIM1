package si.tim1.oglasi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import si.tim1.oglasi.models.Advert;
import si.tim1.oglasi.services.AdvertService;

/**
 * Created by Adnan on 4/29/2017.
 */
@RestController
@RequestMapping(path="/advert")
public class AdvertController {
    @Autowired
    private AdvertService advertService;

    @RequestMapping(value = "/all", method = RequestMethod.GET) // prikaz svih oglasa iz kategorije, treba dodati request parameter za odabranu kat.
    @PreAuthorize("hasRole('ROLE_USER')")
    public Iterable<Advert> getAllAdverts() {
        return advertService.findAll();
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST) // objavljivanje oglasa
    public void untitledMethod() {
        //TODO
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT) // update oglasa
    public void untitledMethod1() {
        //TODO
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET) // detalji oglasa
    public void untitledMethod3() {
        //TODO
    }

    @RequestMapping(value = "/subscribe", method = RequestMethod.POST) // prijava na oglas
    public void untitledMethod4() {
        //TODO
    }

    @RequestMapping(value = "/{id}/subscriptions", method = RequestMethod.GET) // pregled prijava na oglas
    public void untitledMethod5() {
        //TODO
    }

    @RequestMapping(value = "/{id}/subscriptions/{s_id}", method = RequestMethod.GET) // pregled detalja prijave na oglas
    public void untitledMethod6() {
        //TODO
    }




}
