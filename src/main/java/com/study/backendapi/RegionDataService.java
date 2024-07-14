package com.study.backendapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegionDataService {

    @Autowired
    private RegionDataRepository repository;

    public List<RegionData> findAll() {
        return repository.findAll();
    }

    public Optional<RegionData> findByProvinceAndCity(String province, String city) {
        return repository.findByProvinceAndCity(province, city);
    }

    public Optional<RegionData> findById(Long id) {
        return repository.findById(id);
    }

    public RegionData save(RegionData regionData) {
        return repository.save(regionData);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
