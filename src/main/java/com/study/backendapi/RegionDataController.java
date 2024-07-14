package com.study.backendapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/regiondata")
public class RegionDataController {

    @Autowired
    private RegionDataService service;

    @GetMapping
    public List<RegionData> getAll() {
        return service.findAll();
    }

    @GetMapping("/search")
    public RegionData getByProvinceAndCity(@RequestParam String province, @RequestParam String city) {
        return service.findByProvinceAndCity(province, city)
                .orElseThrow(() -> new RuntimeException("Data not found for the specified province and city"));
    }

    @GetMapping("/{id}")
    public Optional<RegionData> getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public RegionData create(@RequestBody RegionData regionData) {
        return service.save(regionData);
    }

    @PutMapping("/{id}")
    public RegionData update(@PathVariable Long id, @RequestBody RegionData regionData) {
        regionData.setId(id);
        return service.save(regionData);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteById(id);
    }
}
